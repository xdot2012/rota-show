from django.urls import path, include
from rest_framework import routers
from legacy import views
from .apis import LocalViewSet, GenerateRouteAPI

# Api routes
router = routers.DefaultRouter()
router.register(r'locals', LocalViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/routes/generate/', GenerateRouteAPI.as_view()),
    path('', views.HomeView.as_view(), name='home'),
]
