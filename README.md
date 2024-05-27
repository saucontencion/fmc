proyecto fotomontaje del carnet


# Tareas a Realizar

1. [x] Arreglar el Formulario
2. [x] Actualizaciones Realizadas en el Formulario
   - [x] Se agregó patrón de control al input de rut del formulario.
   - [ ] agregar el formateador del rut para que se muestre con . y guion
   - [x] Se agregó el input de imagen al formulario.
   - [x] Se agregó el evento para guardar y convertir en base64 la imagen del canvas.
   - [x] Agregar la base64 a la imagen del formulario.
   
3. Configuración del Formulario para Interacción con el Servidor
   - [x] Agregar el atributo action al formulario para especificar la dirección donde enviar los datos y la imagen.
   - [x] Asignar controles formateo y validacion de rut
   - [x] Insertar span de mesaje de validacion del rut 
   - [ ] Agregar el manejador de eventos para cuando se reciba la información desde el servidor. Considerar si la respuesta generará una nueva página con los elementos anteriores cargados.
   
4. [ ]Implementación del Envío de Datos al Servidor
   - [ ] Utilizar el método fetch y preventDefault para enviar una solicitud POST (o GET según sea necesario) al servidor.
   - [ ] Asignar el valor de la respuesta al elemento canvas o a la imagen.
   - [ ] Actualizar o mostrar nuevamente el elemento canvas o imagen, o agregar el selector de clases state correspondiente.
   
5. Manejo de Respuestas del Servidor
   - [ ] Analizar si la solicitud será POST o GET.
   - [ ] Si es POST, desestructurar los datos y asignarlos al canvas o imagen utilizando el atributo src.

 add. 
   corregir funcion switchState 
   - [x] agregar paramentro elementClass a la funcion hidden 
   - [x] inicializar arrayState en funcion hidden con los elementoClass
   - [x] processedimge el selectorbyid no se esta utilizando 
   - [ ]

 Demo.
   1.- [x] saca foto : tener 2 botones 1 reintentar tomar la foto de nuevo y otro boton donde aparece “continuar”.
   2.- [x] despues de “continuar” aparece el formulario para ingresar rut y nombre completo
   existe 1 boton para “procesar”
   3.- [x] el boton procesar construye 1 imagen donde dibuja la imagen original (paso 1) encima un cuadro negro y despues el rut y nombre completo
   tambien se añade 1 boton para imprimir 
   4.- [x] al imprimir procede a la pagina del pago, despues de haber pagado se imprime
   5. -[x] agregar confeti
# datos interesantes

1. [x] el misterior del selector del canvas, al seleccionarlo con el id "canvas" no funciona pero si lo cambio por cualquier otra cosa si, a que se debera esto? 