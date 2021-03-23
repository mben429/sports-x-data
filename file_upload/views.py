"""

Disable for now, save for later...

from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import UploadFileForm
from django.forms import formset_factory
from pymsgbox import *


def uploadFile(request):
    form = UploadFileForm()
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if request.user.is_authenticated:
            if form.is_valid():
                print("Hello there, form is valid!")
                print("Uploading File to S3 Now...")
                uploaded_file = form.save()
                return render(request, 'upload_success.html')
            else:
                print("Form is Invalid")
        else:
            alert(text='Please login to Athlete Centre to Upload Game Footage.... Thanks!', title='Please Login.', button='OK')
            return render(request, 'upload.html', {'form': form})
    
    return render(request, 'upload.html', {'form': form})

def uploadSuccess(request):
    return render(request, 'upload_success.html')

"""

from django.shortcuts import render
from django.http import HttpResponseRedirect

def uploadFile(request):
    return render(request, 'upload.html')

    
def uploadSuccess(request):
    return render(request, 'upload_success.html')