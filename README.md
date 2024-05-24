proyecto fotomontaje del carnet


# Tareas a Realizar

1. [x] Arreglar el Formulario
2. [x] Actualizaciones Realizadas en el Formulario
   - [x] Se agregó patrón de control al input de rut del formulario.
   - [x] Se agregó el input de imagen al formulario.
   - [x] Se agregó el evento para guardar y convertir en base64 la imagen del canvas.
   - [x] Agregar la base64 a la imagen del formulario.
   
3. Configuración del Formulario para Interacción con el Servidor
   - [x] Agregar el atributo action al formulario para especificar la dirección donde enviar los datos y la imagen.
   - [ ] Agregar el manejador de eventos para cuando se reciba la información desde el servidor. Considerar si la respuesta generará una nueva página con los elementos anteriores cargados.
   
4. [ ]Implementación del Envío de Datos al Servidor
   - [ ] Utilizar el método fetch y preventDefault para enviar una solicitud POST (o GET según sea necesario) al servidor.
   - [ ] Asignar el valor de la respuesta al elemento canvas o a la imagen.
   - [ ] Actualizar o mostrar nuevamente el elemento canvas o imagen, o agregar el selector de clases state correspondiente.
   
5. Manejo de Respuestas del Servidor
   - [ ] Analizar si la solicitud será POST o GET.
   - [ ] Si es POST, desestructurar los datos y asignarlos al canvas o imagen utilizando el atributo src.
