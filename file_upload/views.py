from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import UploadFileForm
from django.forms import formset_factory


def uploadFile(request):
    print("Hello In uploadFile Now")
    
    form = UploadFileForm()
    if request.method == 'POST':

        form = UploadFileForm(request.POST, request.FILES)
        print(form.errors)
        if form.is_valid():
            
            print("Hello there, form is valid!")
            uploaded_file = form.save()
            return render(request, 'upload_success.html')
        else:
            print("Form is Invalid")
    
    return render(request, 'upload.html', {'form': form})

def uploadSuccess(request):
    return render(request, 'upload_success.html')


