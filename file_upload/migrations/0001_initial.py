# Generated by Django 2.2.4 on 2021-03-15 05:03

from django.db import migrations, models
import s3direct.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Footage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('teamFor', models.CharField(max_length=255)),
                ('teamAgainst', models.CharField(max_length=255)),
                ('file', s3direct.fields.S3DirectField(blank=True)),
            ],
        ),
    ]