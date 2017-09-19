from django.db import models
from django.forms import ModelForm

class Message(models.Model):
	name = models.CharField(max_length=50)
	email = models.EmailField()
	message = models.CharField(max_length=500)
	def __str__(self):
		return '%s %s' %(self.name, self.message)