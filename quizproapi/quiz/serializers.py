from rest_framework import serializers
from .models import Quiz


class QuizSerializer(serializers.ModelSerializer):
    choices = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Quiz
        fields = ('id', 'question', 'choices', 'answer')
