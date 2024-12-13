from django.contrib import admin
from .models import Clients, Managers, Drivers, User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'role')
    search_fields = ('name', 'email')
    list_filter = ['role']


@admin.register(Clients)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'password')
    search_fields = ('name', 'email')


@admin.register(Managers)
class ManagerAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'password')
    search_fields = ('name', 'email')


@admin.register(Drivers)
class DriverAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'password')
    search_fields = ('name', 'email')
