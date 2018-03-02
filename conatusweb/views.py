from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages



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
	templateName = 'Mag.html'
	return render(request,templateName, {})

def getMessage(request):
	name = request.POST['messageName']
	email = request.POST['messageEmail']
	message = request.POST['message']
	m = Message(name = name, email = email, message = message)
	m.save()
	return redirect("/")

def register(request):
	templateName = 'form.html'
	return render(request,templateName, {})

def saveform(request):
   	fname = request.POST['first_name']
	lname = request.POST['last_name']
	name=fname + str(' ') + lname
	gender = request.POST['gender']
	branch = request.POST['branch']
	student_no = request.POST['studentno']
	email = request.POST['email']
	contact = request.POST['tel']
	m = SaveForm(name = name, email = email, gender = gender, branch=branch, student_no=student_no,contact=contact)
	m.save()
	
 	return redirect("/")	

