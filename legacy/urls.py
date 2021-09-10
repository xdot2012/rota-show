from django.urls import path, include
from rest_framework import routers
from legacy import views

# Api routes
router = routers.DefaultRouter()

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.HomeView.as_view(), name='home'),
]
