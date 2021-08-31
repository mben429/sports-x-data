# register-interest/views.py
from django.core.mail import send_mail, BadHeaderError, get_connection, EmailMultiAlternatives
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import RegisterInterestForm


def registerInterestView(request):
    if request.method == "GET":
        form = RegisterInterestForm()
    else:
        form = RegisterInterestForm(request.POST)
        if form.is_valid():
            #con = get_connection('django.core.mail.backends.console.EmailBackend')

            user_org = form.cleaned_data['user_org']
            user_email = form.cleaned_data['user_email']
            user_message = form.cleaned_data['user_message']
            user_name = form.cleaned_data['user_name']
            user_product_of_interest = form.cleaned_data["user_product_of_interest"]

            recipient = ["mtbennett9010@gmail.com"]
            #send_mail(user_subject, user_message, user_email, recipient, connection=con)

            message = EmailMultiAlternatives(user_product_of_interest, user_message, user_email, recipient)
            message.send()
            return redirect('success')

    return render(request, "register-interest.html", {'form': form, "title": "Register Interest"})


def successView(request):
    return render(request, "success.html", {"title": "Register Interest"})

