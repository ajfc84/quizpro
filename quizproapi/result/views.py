from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
from rest_framework import generics
from .serializers import ResultSerializer
from .models import Result


def show_result(request, pk):
    queryset = Result.objects.filter(user=pk).values_list('score')
    print(queryset)
    response = HttpResponse(content_type='image/png')
    fig, ax = plt.subplots()
    attempts = list([str(i) for i in range(1, len(queryset) + 1)])
    scores = list([y[0] for y in queryset])
    #ax.set_title('Results')
    ax.set_xlabel('attempt')
    ax.set_ylabel('score')
    ax.bar(attempts, scores)
    plt.savefig(response, format='png')
    return response


class ResultCreate(generics.CreateAPIView):
    serializer_class = ResultSerializer
    queryset = Result.objects.all()


