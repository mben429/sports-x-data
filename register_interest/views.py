# register-interest/views.py
from django.core.mail import send_mail, BadHeaderError, get_connection, EmailMultiAlternatives
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import DemoInterestForm, RegisterInterestForm


def registerInterestView(request):
    if request.method == "GET":
        form = RegisterInterestForm()
    else:
        form = RegisterInterestForm(request.POST)
        if form.is_valid():
            #con = get_connection('django.core.mail.backends.console.EmailBackend')

            user_name = form.cleaned_data['user_name']
            user_org = form.cleaned_data['user_org']
            user_email = form.cleaned_data['user_email']
            user_message = form.cleaned_data['user_message']
            user_product_of_interest = form.cleaned_data["user_product_of_interest"]

            combined_subject = user_name + " | " + user_org + " | " + user_product_of_interest
            combined_body = "Name: \n" + user_name + "\n\n" + "Org/Team: \n" + user_org + "\n\n" + "Product of Interest: \n" + user_product_of_interest + "\n\n" + "Message: \n" + user_message 
            recipient = ["mtbennett9010@gmail.com"]
            
            #send_mail(user_subject, user_message, user_email, recipient, connection=con)

            message = EmailMultiAlternatives(subject=combined_subject, body=combined_body, from_email=user_email, to=recipient)
            message.send()
            return redirect('success')

    return render(request, "register-interest.html", {'form': form, "title": "Register Interest"})


def demoInterestView(request):
    if request.method == "GET":
        form = DemoInterestForm()
    else:
        form = DemoInterestForm(request.POST)
        if form.is_valid():
            #con = get_connection('django.core.mail.backends.console.EmailBackend')

            user_name = form.cleaned_data['user_name']
            user_org = form.cleaned_data['user_org']
            user_email = form.cleaned_data['user_email']
            user_message = form.cleaned_data['user_message']

            combined_subject = user_name + " | " + user_org + " | " + " Demo Request"
            combined_body = "Name: \n" + user_name + "\n\n" + "Org/Team: \n" + user_org + "\n\n" + "Message: \n" + user_message
            recipient = ["mtbennett9010@gmail.com"]
            #send_mail(user_subject, user_message, user_email, recipient, connection=con)

            message = EmailMultiAlternatives(subject=combined_subject, body=combined_body, from_email=user_email, to=recipient)
            message.send()
            return redirect('success')

    return render(request, "demo.html", {'form': form, "title": "Demo Sign Up"})

def successView(request):
    return render(request, "success.html", {"title": "Success"})

