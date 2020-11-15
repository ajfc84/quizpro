from django.db import models
from django.contrib.auth.models import User


class Result(models.Model):
    score = models.IntegerField(null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(null=False, auto_now_add=True)

    def __str__(self):
        return 'user: {0}, score: {1}'.format(self.user, self.score)


