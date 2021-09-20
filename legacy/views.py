from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View


class HomeView(View):
    def get(self, request):
        return render(request, "templates/home.html")
