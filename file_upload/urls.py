from django.contrib import admin
from django.urls import path, include
from .views import uploadFile, uploadSuccess
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('upload/', uploadFile, name="upload"),
    path('upload_success/', uploadSuccess, name="uploadSuccess"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
