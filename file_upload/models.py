"""

Disable for now, save for later...

from django.db import models
from django.forms import ModelForm

# Create your models here.

class Footage(models.Model):
    
    teamFor = models.CharField(max_length=255)
    teamAgainst = models.CharField(max_length=255)
    file = models.FileField()
    date_created = models.DateTimeField(auto_now_add=True, null=True)

"""