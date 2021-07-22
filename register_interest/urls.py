from django.contrib import admin
from django.urls import path, include

from .views import registerInterestView, successView

urlpatterns = [
    path('register-interest/', registerInterestView, name="register-interest"),
    path('success/', successView, name="success"),
]
