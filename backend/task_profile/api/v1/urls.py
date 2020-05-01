from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CustomerProfileViewSet, TaskerProfileViewSet, NotificationViewSet

router = DefaultRouter()
router.register("customerprofile", CustomerProfileViewSet)
router.register("notification", NotificationViewSet)
router.register("taskerprofile", TaskerProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
