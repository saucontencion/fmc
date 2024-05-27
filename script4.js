

window.addEventListener('load', function () {
            const video = document.getElementById('video');
            const canvas = document.getElementById('mcanvas');
            const snapButton = document.getElementById('snap');
            const retryButton = document.getElementById('retry');
            const saveButton = document.getElementById('save');
            const form = document.getElementById('form');
            const printButton = document.getElementById('print');
            const processedImage = document.getElementById('processedImage');
            const imgForm = document.getElementById('imgForm')
            const context = canvas.getContext('2d');
            let rut = document.getElementById('rutInput');
            const spanM = document.getElementById('rutValidationMessage')

            let currentState = 1; // pasar a un string 
            let arrayState = []; // Se declara la variable arrayState fuera de las funciones para que sea accesible para ambas funciones
    
            function show(elementclass) {
                // Seleccionar todos los elementos con la clase especificada
                arrayState = document.querySelectorAll(elementclass);
            
                // Iterar sobre los elementos y mostrarlos
                arrayState.forEach(element => {
                    element.style.display = 'block';
                });
            }
            
            function hide(elementclass) {
                arrayState = document.querySelectorAll(elementclass);
                // Iterar sobre los elementos almacenados en arrayState y ocultarlos
                arrayState.forEach(element => {
                    element.style.display = 'none';
                });
            }
            
    
            function switchState(newState) {
                hide(`.state${currentState}`);
                currentState = newState;
                show(`.state${currentState}`);
            }
    
            function initializeCamera() {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => {
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            switchState(1);
                        };
                    })
                    .catch(error => {
                        console.error('Error al acceder a la cámara:', error);
                    });
            }
    
            function capturePhoto() {  
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                switchState(2);
            }
    
            function retryCapture() {
                switchState(1);
            }
    
            function savePhoto() {
                    dataURL = canvas.toDataURL(); // Convertir imagen a base64
                    // Aquí puedes enviar 'dataURL' a tu servidor para guardarla en la base de datos
                    console.log('Imagen guardada:', dataURL);
                    imgForm.src = dataURL
                switchState(3);
            };
    
            
            function formatRut() {
                let input = document.getElementById('rutInput');
                let rut = input.value;
                
                // Eliminar todos los caracteres que no sean dígitos o K
                rut = rut.replace(/[^0-9kK]/g, '').toUpperCase();
                
                // Asegurarse que el RUT tenga al menos un dígito verificador
                if (rut.length < 2) {
                    input.value = rut;
                    return;
                }
                
                // Separar el dígito verificador del número
                let number = rut.slice(0, -1);
                let dv = rut.slice(-1);
                
                // Añadir puntos cada tres dígitos
                let formattedNumber = '';
                while (number.length > 3) {
                    formattedNumber = '.' + number.slice(-3) + formattedNumber;
                    number = number.slice(0, -3);
                }
                formattedNumber = number + formattedNumber;
                
                // Concatenar el número formateado con el dígito verificador
                input.value = formattedNumber + '-' + dv;
            }
            
            
            function validateRut() {
                let rutV = rut.value;
                let rutPattern = /^\d{1,2}\.\d{3}\.\d{3}-[\d\|kK]$/;
                
                if (rutPattern.test(rutV)) {
                    spanM.textContent = 'RUT válido';
                } else {
                    spanM.textContent = 'Ingrese un RUT válido (ej. 12.345.678-9)';
                }
            }
            
            function continueProcess() {
                // Aquí puedes agregar lógica para continuar con el proceso
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al enviar los datos al servidor');
                    }
                    return response.text(); // Leer la respuesta del servidor como texto
                })
                .then(data => {
                    // Manejar la respuesta del servidor
                    respuestaContainer.textContent = data;
                    var dsrc = data.toDataURL()
                    processedImage.src = dsrc
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                switchState(4);
            }
    
            function printImage() {
                // Aquí puedes agregar lógica para imprimir la imagen
                
                // Cambiar el estado a 5
                switchState(5);
                
                // Iniciar la cuenta regresiva
                startCountdown();
            
                // Ejecutar la lógica después de 2 segundos (asumiendo que necesitas esperar un tiempo antes de ejecutar el proceso)
                setTimeout(() => {
                    // Lógica que quieres ejecutar después de 2 segundos
                    console.log('Lógica después de 2 segundos');
                }, 2000);
            }
            
            function startCountdown() {
                document.getElementById('procesando').style.display = 'block'; // Mostrar mensaje de "procesando"
                document.getElementById('countdown').style.display = 'block'; // Iniciar el contador en 4
                document.getElementById('countdown').textContent = '4'; // Iniciar el contador en 4
            
                let count = 4;
                const countdownInterval = setInterval(() => {
                    count--;
                    if (count >= 1) {
                        document.getElementById('countdown').textContent = count; // Actualizar el contador
                    } else {
                        clearInterval(countdownInterval); // Detener el intervalo cuando el contador llegue a 0
                        document.getElementById('procesando').style.display = 'none'; // Ocultar el mensaje de "procesando"
                        document.getElementById('countdown').style.display = 'none'; 
                        // Llamar a la función que se ejecutará después del contador
                        // Por ejemplo, llamando a una función llamada "finalizarProceso()"
                        finalizarProceso();
                    }
                }, 1000); // Intervalo de 1 segundo (1000 milisegundos)
            }
            
            function finalizarProceso() {
                // Esta función se ejecutará una vez que finalice la cuenta regresiva
                console.log('Proceso finalizado');
                // Cambiar el estado a 6
                switchState(6);
                confetti({
                    particleCount: 150,
                    spread: 90,
                    origin: { y: 0.6 }
                });
            };
            
            
            snapButton.addEventListener('click', capturePhoto);
            retryButton.addEventListener('click', retryCapture);
            saveButton.addEventListener('click', savePhoto);
            form.addEventListener('submit',(e) => { e.preventDefault(); continueProcess();});
            printButton.addEventListener('click', printImage);
            rut.addEventListener('input', () => [formatRut(), validateRut()]);

            initializeCamera()
    
    });