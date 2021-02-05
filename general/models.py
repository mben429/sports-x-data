from django.db import models
"""
Database setup
"""

class team_table(models.Model):
    team_name = models.TextField(max_length=50)
    teamid = models.IntegerField()

    def __str__(self):
        return self.team_name


class season_table(models.Model):
    seasonid = models.IntegerField()
    year = models.TextField(max_length=5)
    teamid = models.ForeignKey(
        team_table,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.year + " Season"

class games_table(models.Model):
    gamesid = models.IntegerField()
    top_stat1_name = models.TextField(max_length=50)
    top_stat2_name = models.TextField(max_length=50)
    top_stat3_name = models.TextField(max_length=50)
    top_stat4_name = models.TextField(max_length=50)
    top_stat5_name = models.TextField(max_length=50)
    top_stat6_name = models.TextField(max_length=50)
    date = models.DateField(default=None)
    teamid = models.ForeignKey(
        team_table, 
        on_delete=models.CASCADE
    )
    seasonid = models.ForeignKey(
        season_table,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "Game " + str(self.gamesid)

class stats_table(models.Model):
    statname = models.TextField(max_length=100)
    statval = models.IntegerField()
    teamid = models.ForeignKey(
        team_table,
        on_delete=models.CASCADE
    )
    seasonid = models.ForeignKey(
        season_table,
        on_delete=models.CASCADE
    )
    gamesid = models.ForeignKey(
        games_table,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "Stat " + str(self.statname)
    





