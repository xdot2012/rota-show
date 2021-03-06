from django.contrib.auth.hashers import make_password
from django.http import Http404, HttpResponse, HttpResponseForbidden
from rest_framework import viewsets, status
from accounts.models import User
from accounts.serializers import UserSerializer
from rest_framework import permissions

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class AuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        request.data['username'] = request.data['username'].upper()
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        
        #if request.is_secure():

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'username': user.username
        })
    #return(HttpResponseForbidden)


class IsPostOrIsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True

        return bool(request.user and request.user.is_authenticated)


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsPostOrIsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if instance != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['password'] = make_password(request.data['password'])
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)