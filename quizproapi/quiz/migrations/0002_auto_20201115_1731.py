# Generated by Django 3.1.3 on 2020-11-15 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='answer',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='answer',
            field=models.CharField(max_length=1),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='question',
            field=models.CharField(max_length=150),
        ),
    ]