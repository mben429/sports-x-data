# Views for general site


from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, "index.html")

def plans(request):
    return render(request, "plans.html")

def about(request):
    return render(request, "about-us.html")
