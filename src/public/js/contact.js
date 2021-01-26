document.addEventListener('DOMContentLoaded', () => {
  let $formContact = document.querySelector('.formulario');
  
  /* ==========================================================================
   Validacion de formulario de contacto
   ========================================================================== */
  $formContact.addEventListener('submit', (e) => {
        

      let $nombre = document.getElementById('nombre');
      let $email = document.getElementById('email');
      let $asunto = document.getElementById('asunto');
      let $mensaje = document.getElementById('mensaje');
      let $hayError = false;
    

      //Funcion para validar campos
      function validacionDeCampos(nombreDelCampo, condicion, claseDeErrorAAgregar, msgDeError) {

        let tagPErrores, textDeError;

        if(condicion) {

          if(nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar) == null) {
            nombreDelCampo.style.border = "2px solid red";
            tagPErrores = document.createElement("p");
            textDeError = document.createTextNode(msgDeError);
            tagPErrores.appendChild(textDeError);
            tagPErrores.classList.add(claseDeErrorAAgregar);
            nombreDelCampo.parentElement.appendChild(tagPErrores);
          }

          hayError = true;

        } else {

          hayError = false;
          nombreDelCampo.style.border = "2px solid green";
          
          if(nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar) != null) {
            nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar).remove();
          }

        }
      }

      //Condiciones para validar el campo
      let nombreCondicion = $nombre.value.length < 2;
      let emailCondicion = !(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value));
      let asuntoCondicion = $asunto.value.length < 3;
      let mensajeCondicion = $mensaje.value.length < 10;

      //Validacion de campos
      validacionDeCampos($nombre, nombreCondicion, "error-total", "El nombre debe tener al menos 2 caracteres");
      validacionDeCampos($email, emailCondicion, "error-total", "* El email debe ser valido");
      validacionDeCampos($asunto, asuntoCondicion, "error-total", "* El asunto debe tener al menos 3 caracteres");
      validacionDeCampos($mensaje, mensajeCondicion, "error-total", "* El mensaje debe tener al menos 10 caracteres");
      
      
      
      //Verifica si hay errores en los campos
      if ($hayError || nombreCondicion || emailCondicion || asuntoCondicion || mensajeCondicion) {
        e.preventDefault();
      } 
    });
});
