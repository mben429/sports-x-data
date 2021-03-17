from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Team)
admin.site.register(Season)
admin.site.register(Game)
admin.site.register(Stat)
admin.site.register(Game_Event)
admin.site.register(Season_Averages)
