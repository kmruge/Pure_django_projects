# Generated by Django 4.2.2 on 2023-07-29 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BikeDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('BikeName', models.CharField(max_length=300)),
                ('BikeNumber', models.IntegerField()),
                ('BikeModel', models.IntegerField()),
            ],
        ),
    ]
