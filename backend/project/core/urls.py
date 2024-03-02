# myapp/urls.py

from django.urls import path
from .views import MyModelListCreate

urlpatterns = [
    path('api/mymodels/', MyModelListCreate.as_view(), name='mymodel-list-create'),
]
