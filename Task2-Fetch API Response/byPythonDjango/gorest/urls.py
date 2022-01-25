from django.urls import path

from .views import dashboard, users

urlpatterns = [
    path('', dashboard, name='dashboard'),
    path('users/', users, name='users'),
]

