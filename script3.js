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

// Función para solicitar permisos y acceder a la cámara del usuario
function requestPermission() {
    return new Promise((resolve, reject) => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            reject('getUserMedia no está disponible en este navegador');
        } else {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    resolve(stream);
                })
                .catch(error => {
                    reject(error);
                });
        }
    });
}
// Función para tomar una foto
function takeSnapshot() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    m ? showVideo() : noshowVideo();
}

// Función para guardar la imagen en base64
function saveImage() {
    dataURL = canvas.toDataURL(); // Convertir imagen a base64
    // Aquí puedes enviar 'dataURL' a tu servidor para guardarla en la base de datos
    console.log('Imagen guardada:', dataURL);
}

// Inicialización
window.addEventListener("load", function (e) {
    requestPermission()
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                snapButton.addEventListener('click', takeSnapshot);
                b2Button.addEventListener('click', saveImage);
                retryButton.addEventListener('click', showVideo);
            };
        })
        .catch(error => {
            console.error('Error al acceder a la cámara:', error);
        });
});
