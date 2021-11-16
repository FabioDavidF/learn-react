from django.urls import path
from . import views

urlpatterns = [
    path('add-meetup', views.add_meetup),
]
