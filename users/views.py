from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm, MatchCentreIDForm
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps, loads
from general.models import Team, Season, Game, Stat
from general.retrieval import *
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.core import serializers
from django.template.loader import render_to_string



def matchCentreView(request):

    team_user_name = request.user.username

    if request.method == "POST":
        match_id_form = MatchCentreIDForm(request.POST)
        print("Hello in Form now")

        if match_id_form.is_valid():
            print("Form is valid")
            for key in request.POST.keys():
                if key.startswith('game_id_'):
                    game_id = key[8:]
                    print("Current Game id is: ", game_id)
                    break
            
                # Redirect TeamTestName Login
            if team_user_name == "TeamTestName":
                team_user_name = "rosmini1stxv"

            # Get Data from DB
            game_stat_data = get_game_stat_data(game_id)
            data_dict = {
                "game_stat_data": game_stat_data
            }
            print("Game Stat Data: ", game_stat_data)
                            
            dataJSON = dumps(data_dict, default=str)

            return render(request, "registration/new_ac.html", {"game_id" : game_id, "data": dataJSON})
        
        else:
            print("Form is invalid!")
            print(match_id_form.errors)

        
    else:
        match_id_form = MatchCentreIDForm()

    
    return render(request, "registration/new_ac.html")


def check_league_enabled(team):
    teams_enabled = ["massey1stxv", "rosmini1stxv"]
    if team in teams_enabled:
        return True
    else:
        return False


def loginView(request):
    if request.method == "GET":
        form = LoginForm()
    else:
        form = LoginForm(request.POST)
        if form.is_valid():
            team_user_name = form.cleaned_data['team_user_name']
            team_user_key = form.cleaned_data['team_user_key']

            user = authenticate(request, username=team_user_name, password=team_user_key)
            
            if user is not None:
                login(request, user)
                print("Current team username is: ", request.user.username)
                
                # Redirect TeamTestName Login
                if team_user_name == "TeamTestName":
                    team_user_name = "rosmini1stxv"

                # Get Data from DB
                team_table_data = get_team_table_data(team_user_name)
                team_season_data = get_team_season_table_data(team_user_name)
                team_game_data = get_team_game_data(team_user_name)
                team_stat_data = get_team_stat_data(team_user_name)
                
                # Dump data into JSON for communication with JS
                data_dict = {
                    'team_user_name' : team_user_name,
                    'team_table_data': team_table_data,
                    'team_season_data': team_season_data,
                    'team_game_data': team_game_data,
                    'team_stat_data': team_stat_data,
                }
                                
                dataJSON = dumps(data_dict, default=str)
                return redirect("teamCentre")
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})


def teamCentreView(request):
    team_user_name = request.user.username
    # Redirect TeamTestName Login
    if team_user_name == "TeamTestName":
        team_user_name = "rosmini1stxv"

    # Get Data from DB
    team_table_data = get_team_table_data(team_user_name)
    team_season_data = get_team_season_table_data(team_user_name)
    team_game_data = get_team_game_data(team_user_name)
    team_stat_data = get_team_stat_data(team_user_name)
    team_game_event_data = get_team_game_event_data(team_user_name)
    
    # Dump data into JSON for communication with JS
    data_dict = {
        'team_user_name' : team_user_name,
        'team_table_data': team_table_data,
        'team_season_data': team_season_data,
        'team_game_data': team_game_data,
        'team_stat_data': team_stat_data,
        'team_game_event_data': team_game_event_data
    }

    dataJSON = dumps(data_dict, default=str)

    return render(request, "registration/ac_home.html", {"data": dataJSON})

    
def logoutView(request):
    logout(request)
    return redirect('login')

