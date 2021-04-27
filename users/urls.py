from django.contrib import admin
from django.urls import path, include
from .views import loginView, teamCentreView, logoutView, matchCentreView

urlpatterns = [
    path('login/', loginView, name="login"),
    path('team_centre/', teamCentreView, name="teamCentre"),
    path('logout/', logoutView, name="logout"),
    path('match_centre/', matchCentreView, name="matchCentre")
]


