# temp/urls.py

from django.urls import path
from .views import convert_temperature

urlpatterns = [
    path("convert/", convert_temperature, name="convert_temperature"),
]
