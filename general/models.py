from django.db import models
import datetime
from django.db import connection
"""
Database setup
"""

class Team(models.Model):
    team_name = models.TextField(max_length=50)

    def __str__(self):
        return str(self.team_name)

    def get_team_name(self):
        return self.team_name

    def set_team_name(self, new_name):
        self.team_name = new_name


class Season(models.Model):
    season_name = models.TextField(max_length=50)
    year = models.IntegerField()
    team_name = models.ForeignKey(
        Team,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return str(self.season_name)


class Game(models.Model):
    team_against = models.TextField(max_length=50)
    score_for = models.IntegerField()
    score_against = models.IntegerField()
    date = models.DateField(default=None)
    result = models.TextField(default=None, max_length=5)
    team_name = models.ForeignKey(
        Team, 
        on_delete=models.CASCADE
    )
    season_name = models.ForeignKey(
        Season,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return str(self.team_name) + "vs" + str(self.team_against)


class Stat(models.Model):
    statname = models.TextField(max_length=100)
    statval = models.IntegerField()
    team_name = models.ForeignKey(
        Team,
        on_delete=models.CASCADE
    )
    season_name = models.ForeignKey(
        Season,
        on_delete=models.CASCADE
    )
    game_name = models.ForeignKey(
        Game,
        blank=True,
        null=True,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "Stat " + str(self.statname)


class Game_Event(models.Model):
    try_scorers_txt = models.TextField(max_length=255)
    con_scorers_txt = models.TextField(max_length=255)
    pen_scorers_txt = models.TextField(max_length=255)
    week_no = models.IntegerField()
    team_name = models.ForeignKey(
        Team, 
        on_delete=models.CASCADE
    )
    season_name = models.ForeignKey(
        Season,
        on_delete=models.CASCADE
    )
    game_name = models.ForeignKey(
        Game,
        blank=True,
        null=True,
        on_delete=models.CASCADE
    )


class Season_Averages(models.Model):
    stat_name = models.TextField(max_length=255)
    stat_val = models.IntegerField()
    team_name = models.ForeignKey(
        Team,
        on_delete=models.CASCADE
    )
    season_name = models.ForeignKey(
        Season,
        on_delete=models.CASCADE
    )
