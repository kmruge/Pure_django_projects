from django.contrib import admin
from django.urls import path
from mummy.views import home
urlpatterns = [
    path('home/',home, name="home")
]