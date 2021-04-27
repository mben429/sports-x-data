/*

Disable for now, save for later...


function UploadBarConfig(){

    const uploadForm = document.getElementById('upload-form');
    const input = document.getElementById('id_file');
    const submit_btn = document.getElementById('submit-upload-btn');

    const alertBox = document.getElementById('alert-box');
    const progressBox = document.getElementById('progress-box');
    const cancelBox = document.getElementById('cancel-box');
    const cancelBtn = document.getElementById('cancel-btn');
    const csrf = document.getElementsByName('csrfmiddlewaretoken');

    input.addEventListener('change', ()=>{
        progressBox.classList.remove('not-visible');
        cancelBox.classList.remove('not-visible');
        cancelBox.classList.add('pointer-element')

        // Validate that the file is correct type.... TODO 

        const file_data = input.files[0];
        console.log("Getting file data....");
        console.log(file_data);
        
        const fd = new FormData()
        fd.append('csrfmiddlewaretoken', csrf[0].value);
        fd.append('file', file_data);

        $.ajax({
            type:'POST',
            url: uploadForm.action,
            enctype: 'multipart/form-data',
            data: fd,
            beforeSend: function(){

            },
            xhr: function(){
                const xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', e=>{
                    if(e.lengthComputable){
                        const percent = e.loaded / e.total * 100;
                        console.log(percent);
                        progressBox.innerHTML = `<div class="progress" style="height: 1em;">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${percent}%" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <p class="percent-text">${percent.toFixed(1)}%</p>`
                    }
                })
                cancelBtn.addEventListener('click', ()=>{
                    xhr.abort();
                    progressBox.innerHTML="";
                    cancelBox.classList.add('not-visible');
                })
                return xhr;
            },
            success: function(response){
                console.log(response)
                progressBox.innerHTML="";
                cancelBox.classList.add('not-visible');
                alertBox.innerHTML = `<div class="alert alert-success" role="alert">
                                        File Succesfully Uploaded!
                                    </div>`
            },
            error: function(error){
                console.log(error)
                
            },
            cache: false,   
            contentType: false,
            processData: false,

        })

    });
}
*/