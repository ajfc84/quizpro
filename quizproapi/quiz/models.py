from django.db import models
from  django.contrib.auth.models import User


class Quiz(models.Model):
    question = models.CharField(blank=False, max_length=150)
    answer = models.IntegerField(null=False)
    def __str__(self):
        return self.question[:150]

class Choice(models.Model):
    answer = models.CharField(blank=False, max_length=100)
    quiz = models.ForeignKey(Quiz, related_name='choices', on_delete=models.CASCADE)
    def __str__(self):
        return self.answer[:100]


