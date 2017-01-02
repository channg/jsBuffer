

//get this method in http://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function getFile(){
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var result= document.getElementById("result");
        var arrayBuffer = reader.result;
        var v =new Int8Array(arrayBuffer)
        var base64 = _arrayBufferToBase64(arrayBuffer)
        document.getElementById("img").src= 'data:image/jpg;base64,'+base64
    };
    reader.readAsArrayBuffer(file);
}

document.getElementById('fileInput').addEventListener("change", function () {
    getFile()
})
