# Generated by Django 3.1.3 on 2020-11-15 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_auto_20201115_1731'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='answer',
            field=models.IntegerField(),
        ),
    ]
