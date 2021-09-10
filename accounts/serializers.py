from accounts.models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ['url', 'pk', 'username', 'email', 'password', 'is_staff']
