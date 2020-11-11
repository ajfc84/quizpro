from django.test import TestCase
from django.contrib.auth.models import User
from .models import Quiz, Choice

# Create your tests here.
class QuizTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_user1 = User.objects.create_user(username='user1', password='testme')
        test_user1.save()


        test_choice1 = Choice.objects.create(answer="choice1")
        test_choice1.save()
        test_quiz1 = Quiz.objects.create(
            question='question1', choice=test_choice1, answer=3)
        test_quiz1.save()

    def test_quizzes(self):
        quiz = Quiz.objects.get(id=1)

        self.assertEqual(quiz.question, 'question1')
        self.assertEqual(quiz.choice.answer, 'choice1')
        self.assertEqual(quiz.answer, 3)

