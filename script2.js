const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const b2Button = document.getElementById('b2');
const retryButton = document.getElementById('retry'); // Nuevo botón
let dataURL = "";
let m = true;
// Función para mostrar el video y ocultar la imagen
function showVideo() {
    video.style.display = 'block';
    canvas.style.display = 'none';
    snapButton.innerText = 'Tomar Foto'; // Cambiar texto del botón
    b2Button.style.display = 'none'; // Ocultar botón de guardar
    m = false;
}

function noshowVideo() {
    video.style.display = 'none';
    canvas.style.display = 'block';
    b2Button.style.display = 'block';
    snapButton.innerText = 'Reintentar';
    m = true;
}
// Acceder a la cámara del usuario
window.addEventListener("load", function (e) {
   navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                // Tomar una foto
                snapButton.addEventListener('click', () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    m ? showVideo() : noshowVideo();

                });

                // Guardar la imagen en base64
                b2Button.addEventListener('click', () => {
                    dataURL = canvas.toDataURL(); // Convertir imagen a base64
                    // Aquí puedes enviar 'dataURL' a tu servidor para guardarla en la base de datos
                    console.log('Imagen guardada:', dataURL);
                });

                // Evento para reintentar
                retryButton.addEventListener('click', showVideo);
            };
        })
        .catch(error => {
            console.error('Error al acceder a la cámara:', error);
        });
});