# Generated by Django 4.2.2 on 2023-07-29 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connect', '0002_remove_bikedetail_id_bikedetail_custom_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikedetail',
            name='custom_id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
        ),
    ]