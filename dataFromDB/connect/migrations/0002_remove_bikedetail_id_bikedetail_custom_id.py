# Generated by Django 4.2.2 on 2023-07-29 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bikedetail',
            name='id',
        ),
        migrations.AddField(
            model_name='bikedetail',
            name='custom_id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
