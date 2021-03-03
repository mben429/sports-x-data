# Views for general site

from django.http import HttpResponse
from django.shortcuts import render
from general.models import Team, Season, Game, Stat

def index(request):
    print("Current team is Logged in: ", request.user)
    return render(request, "index.html")

def plans(request):
    return render(request, "plans.html")

def about(request):
    return render(request, "about-us.html")
