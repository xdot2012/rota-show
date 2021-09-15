from rest_framework import serializers
from .models import Local
from accounts.models import User

class LocalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Local
        fields = ['pk', 'name', 'latitude', 'longitude', 'user_id']
