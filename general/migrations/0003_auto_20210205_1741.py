# Generated by Django 2.2.4 on 2021-02-05 04:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('general', '0002_games_table_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='games_table',
            name='date',
            field=models.DateField(default=None),
        ),
    ]
