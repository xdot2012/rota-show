# accounts/urls.py
from django.urls import path, include
from accounts.views import SignUpView 
from accounts.apis import UsersViewSet, AuthToken
from rest_framework import routers

# Api routes
router = routers.DefaultRouter()
router.register(r'users', UsersViewSet)


urlpatterns = [
    path('token/', AuthToken.as_view()),
    path('', include(router.urls)),
]

