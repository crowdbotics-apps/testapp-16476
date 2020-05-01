from django.contrib import admin
from .models import CustomerProfile, TaskerProfile, Notification

admin.site.register(CustomerProfile)
admin.site.register(Notification)
admin.site.register(TaskerProfile)

# Register your models here.
