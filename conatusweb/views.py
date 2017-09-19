from django.shortcuts import render, redirect
from .models import *


def index(request):
	templateName = 'index.html'
	return render(request,templateName, {})

def editorial(request):
	templateName = 'editorial.html'
	return render(request,templateName, {})

def timeline(request):
	templateName = 'timeline.html'
	return render(request,templateName, {})

def mag(request):
	templateName = 'mag.html'
	return render(request,templateName, {})

def getMessage(request):
	name = request.POST['messageName']
	email = request.POST['messageEmail']
	message = request.POST['message']
	m = Message(name = name, email = email, message = message)
	m.save()
	return redirect("/")

