const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const b2Button = document.getElementById('b2');

let dosauno; /*cuando m = true ,se ejecutara show video, se mostrara el vide, se oculatar 
el canvas, el snapp buton */
function estado1(){
    video.style.display = 'block';
    canvas.classList.remove = ('show');
    snapButton.innerText = 'Tomar Foto'; // Cambiar texto del botón
    b2Button.style.display = 'none';
    m = true // Ocultar botón de guardar
    canvas.classList.remove('show');   

}
function estado2(){
}
function estado3(){

}
function estado4() {

}
function estado5() {
    
}
function estado6() {
    
}
function estado7() {
    
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
                    estado1();// Agrega la clase para mostrar la imagen
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
video.dispatchEvent
// (dosaunootres){
//     if (dosaunootres=1) {
//         estado1();
//     } else {
//         estado3();
//     }
 
                // function showVideo(dosauno) {
                //  canvas.style.display = 'block';
                canvas.classList.add('show');  
                
                //video.style.display = 'block';
                //     canvas.classList.remove = ('show');
                //     snapButton.innerText = 'Tomar Foto'; // Cambiar texto del botón
                //     b2Button.style.display = 'none';
                //     m = true // Ocultar botón de guardar
                //     canvas.classList.remove('show'); 
                // }