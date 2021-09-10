from django import forms

from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from accounts.models import User

class UserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = User
        fields = ('username', 'email')

class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm):
        model = User
        fields = ('username', 'email')