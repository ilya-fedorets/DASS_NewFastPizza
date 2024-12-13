from django.db.models.signals import pre_save
from django.dispatch import receiver

from website.models import User, Clients, Drivers, Managers


@receiver(pre_save, sender=User)
def create_or_update_user_profile(sender, instance, **kwargs):
    # Проверяем, изменяется ли роль пользователя
    if instance.role == 'driver':
        # Проверяем, существует ли профиль водителя, если нет, создаем
        if not Drivers.objects.filter(user=instance).exists():
            Drivers.objects.create(
                user=instance,
                name=instance.name,
                email=instance.email,
                password=instance.password,  # Хеширование пароля!
            )
    elif instance.role == 'manager':
        # Проверяем, существует ли профиль manager, если нет, создаем
        if not Managers.objects.filter(user=instance).exists():
            Managers.objects.create(
                user=instance,
                name=instance.name,
                email=instance.email,
                password=instance.password,  # Хеширование пароля!
            )
