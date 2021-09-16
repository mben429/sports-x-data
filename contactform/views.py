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

            combined_subject = user_name + " | " + user_org + " | " + "Getting in Touch"
            combined_body = "Name: \n" + user_name + "\n\n" + "Org/Team: \n" + user_org + "\n\n" + "Message: \n" + user_message
            recipient = ["mtbennett9010@gmail.com"]
            #send_mail(user_subject, user_message, user_email, recipient, connection=con)

            message = EmailMultiAlternatives(subject=combined_subject, body=combined_body, from_email=user_email, to=recipient)
            message.send()
            return redirect('success')

    return render(request, "contact.html", {'form': form, "title": "Contact Us"})


def successView(request):
    return render(request, "success.html", {"title": "Success"})

