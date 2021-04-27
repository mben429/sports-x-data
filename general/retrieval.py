from django.db import connection
from general.models import Team, Season, Game, Stat

def get_all_teams():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM general_team")
        all_teams = cursor.fetchall()
    return all_teams

def get_all_seasons():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM general_season")
        all_seasons = cursor.fetchall()
    return all_seasons

def get_all_games():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM general_game")
        all_games = cursor.fetchall()
    return all_games

def get_all_stats():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM general_stat")
        all_stats = cursor.fetchall()
    return all_stats

def get_team_table_data(team):
    with connection.cursor() as cursor:
        exec_str = "SELECT * FROM general_team WHERE team_name=\'" + str(team) + "\'"
        cursor.execute(exec_str)
        curr_team_data = cursor.fetchall()
    return curr_team_data


def get_team_season_table_data(team):
    with connection.cursor() as cursor:
        exec_str = "SELECT * FROM general_season INNER JOIN general_team ON general_season.team_name_id = general_team.id AND general_team.team_name =\'" + str(team) + "\'"
        cursor.execute(exec_str)
        curr_team_data = cursor.fetchall()
    return curr_team_data


def get_team_game_data(team):
    with connection.cursor() as cursor:
        exec_str = "SELECT * FROM general_game INNER JOIN general_team ON general_game.team_name_id = general_team.id AND general_team.team_name =\'" + str(team) + "\'"
        cursor.execute(exec_str)
        curr_team_data = cursor.fetchall()
    return curr_team_data


def get_team_stat_data(team):
    with connection.cursor() as cursor:
        exec_str = "SELECT * FROM general_stat INNER JOIN general_team ON general_stat.team_name_id = general_team.id AND general_team.team_name =\'" + str(team) + "\'"
        cursor.execute(exec_str)
        curr_team_data = cursor.fetchall()
    return curr_team_data


def get_team_game_event_data(team):
    with connection.cursor() as cursor:
        exec_str = "SELECT * FROM general_game_event INNER JOIN general_team ON general_game_event.team_name_id = general_team.id AND general_team.team_name =\'" + str(team) + "\'"
        cursor.execute(exec_str)
        curr_team_data = cursor.fetchall()
    return curr_team_data
    
