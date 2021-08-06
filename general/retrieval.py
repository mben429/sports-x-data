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

def get_game_stat_data(game_id):
    # Get all stat and game data for a particular game
    with connection.cursor() as cursor:
        exec_str = 'SELECT * FROM general_stat INNER JOIN general_game ON general_stat.game_name_id = general_game.id WHERE general_stat.game_name_id = ' + str(game_id) + ';'
        cursor.execute(exec_str)
        curr_game_stat_data = cursor.fetchall()
    return curr_game_stat_data   

def get_game_info_data(game_id):
    # Get all basic game info for a particular game
    with connection.cursor() as cursor:
        exec_str = 'SELECT * FROM general_game WHERE general_game.id = ' + str(game_id) + ';'
        cursor.execute(exec_str)
        curr_game_info_data = cursor.fetchall()
    return curr_game_info_data   

def get_game_event_data(game_id):
    # Get all game event data (cons, pens, dg, tries...)
    with connection.cursor() as cursor:
        exec_str = 'SELECT * FROM general_game_event WHERE general_game_event.game_name_id = ' + str(game_id) + ';'
        cursor.execute(exec_str)
        curr_game_event_data = cursor.fetchall()
    return curr_game_event_data   


def get_overview_stats(game_id):
    ov_stat_list = [
        "'posession'", 
        "'territory'", 
        "'handling_errors'", 
        "'tackle_success'", 
        "'top_tackler_total'",
        "'top_tackler_percentage'",
        "'top_linebreaks'",
        "'top_tackles_broken'",
        "'top_tackles_broken_percentage'",
        "'most_ruck_steals'",
        "'best_playmaker_pass_to_linebreaks'",
        "'best_playmaker_successful_passes'",
        "'most_ball_carries'"
    ]

    ov_stat_dict = {}
    with connection.cursor() as cursor:
        for i in range(len(ov_stat_list)):
            exec_str_part = "SELECT general_stat.statval FROM general_stat WHERE general_stat.game_name_id = " + str(game_id) + " AND general_stat.statname = " + ov_stat_list[i] + ";"
            cursor.execute(exec_str_part)
            stat = cursor.fetchall()
            ov_stat_dict[ov_stat_list[i]] = stat
    
    return ov_stat_dict
        
            