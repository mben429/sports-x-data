from django.contrib import admin
from django.urls import path, include
from .views import loginView, loggedinView, logoutView

urlpatterns = [
    path('login/', loginView, name="login"),
    path('loggedin/', loggedinView, name="loggedin"),
    path('logout/', logoutView, name="logout"),
]


