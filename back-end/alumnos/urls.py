from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.crear_alumno, name='crear-alumno'),
    path('consultar-alumno/<int:grado>/', views.consultar_alumno, name='consultar-alumno'),
]