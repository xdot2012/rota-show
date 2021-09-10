from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
from django.db import models


# Create your models here.
class User(AbstractUser):
    pass
    # add additional fields in here

    def __str__(self):
        return self.email


