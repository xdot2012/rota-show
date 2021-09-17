from django.db import IntegrityError
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import LocalSerializer
from .models import Local
from accounts.models import User
from rest_framework.response import Response


class LocalViewSet(viewsets.ModelViewSet):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = [IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance.user != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        if instance.user != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            user = User.objects.get(pk=request.data['user_id'])
        except:
            return Response({'error': 'Usuário não existe'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        if Local.objects.filter(user=user, name=serializer.validated_data['name']).exists():
            return Response({'error': 'Já existe um local com este nome!'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            Local.objects.create(
                name=serializer.validated_data['name'],
                latitude=serializer.validated_data['latitude'],
                longitude=serializer.validated_data['longitude'],
                user=user)
        except IntegrityError:
            return Response({'error': 'Local já existe'}, status=status.HTTP_400_BAD_REQUEST)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class GenerateRouteAPI(APIView):
    def post(self, request):
        print("LÓGICA AQUI")
        initial_point_pk = request.data['initial_point_pk']

        response = {
            'route': [

            ]
        }
        return Response(response, status=status.HTTP_200_OK)
        
