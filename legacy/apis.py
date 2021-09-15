from django.db import IntegrityError
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from .serializers import LocalSerializer
from .models import Local
from accounts.models import User
from rest_framework.response import Response

class LocalViewSet(viewsets.ModelViewSet):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = [IsAuthenticated]


    def create(self, request, *args, **kwargs):
        print(request.data)
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