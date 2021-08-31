# Views for general site

from django.http import HttpResponse
from django.shortcuts import render
from general.models import Team, Season, Game, Stat

def index(request):
    context = {
        "title": "Sports x Data | Digital Tools and Services for Rugby Teams"
    }
    print("Current team is Logged in: ", request.user)
    return render(request, "index.html", context)

def plans(request):
    return render(request, "plans.html")

def about(request):
    return render(request, "about-us.html")

def analysis(request):
    context = {
        "title": "Sports x Data | Analysis"
    }
    return render(request, "analysis.html", context)

def gameplan(request):
    context = {
        "title": "Sports x Data | GamePlan"
    }
    return render(request, "gameplan.html", context)
