# contactform/views.py
from django.core.mail import send_mail, BadHeaderError, get_connection, EmailMultiAlternatives
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm


def contactView(request):
    if request.method == "GET":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            #con = get_connection('django.core.mail.backends.console.EmailBackend')

            user_org = form.cleaned_data['user_org']
            user_email = form.cleaned_data['user_email']
            user_message = form.cleaned_data['user_message']
            user_name = form.cleaned_data['user_name']
            user_subject = form.cleaned_data["user_subject"]

            recipient = ["mtbennett9010@gmail.com"]
            #send_mail(user_subject, user_message, user_email, recipient, connection=con)

            message = EmailMultiAlternatives(user_subject, user_message, user_email, recipient)
            message.send()
            return redirect('success')

    return render(request, "contact.html", {'form': form})


def successView(request):
    return render(request, "success.html")

