from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('plans/', views.plans),
    path('about-us/', views.about),
]
