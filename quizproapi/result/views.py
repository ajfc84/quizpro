from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
from rest_framework import generics
from .serializers import ResultSerializer
from .models import Result
from rest_framework.authtoken.models import Token


def show_result(request, pk):
    token = request.headers.get('Authorization').split()
    user_id = Token.objects.get(key=token[1]).user_id
    queryset = Result.objects.filter(user=user_id).values_list('score')
    response = HttpResponse(content_type='image/png')
    fig, ax = plt.subplots()
    attempts = list([str(i) for i in range(1, len(queryset) + 1)])
    scores = list([y[0] for y in queryset])
    ax.set_xlabel('attempt')
    ax.set_ylabel('score')
    ax.bar(attempts, scores)
    plt.savefig(response, format='png')
    return response


class ResultCreate(generics.CreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

    def post(self, request, *args, **kwargs):
        token = request.headers.get('Authorization').split()
        user_id = Token.objects.get(key=token[1]).user_id
        request.data['user'] = user_id
        return self.create(request, *args, **kwargs)


