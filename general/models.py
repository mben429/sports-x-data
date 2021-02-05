from django.db import models
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
    game_name = models.TextField()
    top_stat1_name = models.TextField(max_length=50)
    top_stat2_name = models.TextField(max_length=50)
    top_stat3_name = models.TextField(max_length=50)
    top_stat4_name = models.TextField(max_length=50)
    top_stat5_name = models.TextField(max_length=50)
    top_stat6_name = models.TextField(max_length=50)
    date = models.DateField(default=None)
    team_name = models.ForeignKey(
        Team, 
        on_delete=models.CASCADE
    )
    season_name = models.ForeignKey(
        Season,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "Game " + str(self.game_name)

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
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "Stat " + str(self.statname)
    





