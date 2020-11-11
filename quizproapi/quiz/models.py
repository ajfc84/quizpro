from django.db import models
from  django.contrib.auth.models import User


class Quiz(models.Model):
    question = models.TextField(blank=False)
    answer = models.IntegerField(null=False)
    def __str__(self):
        return self.question[:50]

class Choice(models.Model):
    answer = models.TextField(blank=False)
    quiz = models.ForeignKey(Quiz, related_name='choices', on_delete=models.CASCADE)
    def __str__(self):
        return self.answer[:50]