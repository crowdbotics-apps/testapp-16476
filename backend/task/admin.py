from django.contrib import admin
from .models import TaskTransaction, Rating, Message

admin.site.register(Rating)
admin.site.register(Message)
admin.site.register(TaskTransaction)

# Register your models here.
