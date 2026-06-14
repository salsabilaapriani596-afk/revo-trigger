function beforeUpload(file){
    console.log("Before upload:", file.name);
}

function afterUpload(file){
    console.log("After upload:", file.name);
}

function previewFile(input){

    let file = input.files[0];

    if(!file) return;

    beforePreview();

    beforeUpload(file);

    let ext = file.name.split('.').pop().toLowerCase();

    if(!["jpg","jpeg","png","pdf"].includes(ext)){
        console.log("Format tidak valid");
        return;
    }

    afterUpload(file);

    afterPreview();

    console.log("File siap upload");
}

function deleteFile(name){
    beforeDelete(name);

    console.log("Delete file:", name);

    afterDelete(name);
}

function beforeDelete(name){
    console.log("Before delete:", name);
}

function afterDelete(name){
    console.log("After delete:", name);
}

function beforePreview(){
    console.log("Before preview");
}

function afterPreview(){
    console.log("After preview");
}