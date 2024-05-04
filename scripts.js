const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const b2Button = document.getElementById('b2');

let m;

function showVideo(m) {
    video.style.display = 'block';
    canvas.style.display = 'none';
    snapButton.innerText = 'Tomar Foto'; // Cambiar texto del botón
    b2Button.style.display = 'none';
    m = true // Ocultar botón de guardar
    canvas.classList.remove('show'); 
}
// Acceder a la cámara del usuario
window.addEventListener("load", function (e) {
    console.log(e);
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                // Tomar una foto
                snapButton.addEventListener('click', () => {
		    canvas.style.display = 'block';
                    canvas.classList.add('show'); // Agrega la clase para mostrar la imagen
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    video.style.display = 'none';
                    canvas.style.display = 'block';
                    b2Button.style.display = 'block';

                });
            };
        })
        .catch(error => {
            console.error('Error al acceder a la cámara:', error);
        });

})