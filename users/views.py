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

        if match_id_form.is_valid():
            for key in request.POST.keys():
                if key.startswith('game_id_'):
                    game_id = key[8:]
                    break
            
            # Redirect TeamTestName Login
            if team_user_name == "TeamTestName":
                team_user_name = "rosmini1stxv"

            # Get Data from DB, prepare to deserialize into JSON.
            data_dict = {
                "game_info_data": get_game_info_data(game_id),
                "game_stat_data": get_game_stat_data(game_id),
                "game_event_data": get_game_event_data(game_id),
                "game_overview_data" : get_overview_stats(game_id),
                "try_scorers_data" : get_try_scorers(game_id),
                "game_attack_data" : get_attack_stats(game_id),
                "game_defense_data": get_defense_stats(game_id),
                "game_kg_data": get_kg_stats(game_id),
                "game_bh_data": get_bh_stats(game_id),
                "game_breakdown_data": get_breakdown_stats(game_id),
                "game_sp_data": get_sp_stats(game_id),
                "game_discipline_data": get_discipline_stats(game_id)
            }
                
            dataJSON = dumps(data_dict, default=str)

            return render(request, "registration/new_ac.html", {"game_id" : game_id, "data": dataJSON, "title": "Match Centre"})
        
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
                return render(request, "registration/login_failure.html", {"title": "Login"})

    return render(request, "registration/login.html", {'form': form, "title": "Login"})


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

    return render(request, "registration/ac_home.html", {"data": dataJSON, "title": "Team Centre"})

    
def logoutView(request):
    logout(request)
    return redirect('login')

