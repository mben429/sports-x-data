# Generated by Django 2.2.4 on 2021-03-03 03:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='package_type',
        ),
    ]