from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import UploadFileForm
from django.core.files.storage import FileSystemStorage

def uploadFile(request):
    if request.method == 'POST':

        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            uploaded_file = request.FILES["file"]
            fs = FileSystemStorage()
            fs.save(uploaded_file.name, uploaded_file)
            return render(request, 'upload_success.html')
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})

def uploadSuccess(request):
    return render(request, 'upload_success.html')


