from django.urls import path
from .views import show_result, ResultCreate

urlpatterns = [
    path('', ResultCreate.as_view()),
    path('show/<int:pk>', show_result, name='show_result'),
]


