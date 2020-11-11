from django.urls import path

from .views import QuizList, QuizRetrieve

urlpatterns = [
    path('<int:pk>/', QuizRetrieve.as_view()),
    path('', QuizList.as_view()),
]