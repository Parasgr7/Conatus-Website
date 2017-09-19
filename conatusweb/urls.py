from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^$', views.index, name = "home"),
    url(r'^editorial/', views.editorial, name = "editorialHome"),
    url(r'^mag/', views.mag, name = "magHome"),
    url(r'^timeline/', views.timeline, name = "timelineHome"),
    url(r'^sendmessage/', views.getMessage, name = "getmessage"),    
    
    
    ]