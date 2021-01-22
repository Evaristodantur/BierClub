/* Hide overflow con el boton */

function modificarPerfil() {
  document.getElementById("modificar").classList.toggle("showModificar");
  document.getElementById("body").classList.toggle("hideOverflow");
}

/* Hide overflow con el div opaco */
function divTransparencia() {
  document.getElementById("modificar").classList.toggle("showModificar");
  document.getElementById("body").classList.toggle("hideOverflow");
}

document.addEventListener('DOMContentLoaded', () => {
    let $formRegister = document.querySelector('.formulario');
    
    
    $formRegister.addEventListener('submit', (e) => {

      let $nombre = document.getElementById('nombre');
      let $email = document.getElementById('email');
      let $contrasenia = document.getElementById('contrasenia');
      let $confirmarContrasenia = document.getElementById('confirmarContrasenia');
      let $terminosCondiciones = document.getElementById('terminosCondiciones');
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


      //Validacion de campos
      validacionDeCampos($nombre, $nombre.value.length < 3, "error-total", "El nombre debe tener al menos 2 caracteres");
      validacionDeCampos($email, !(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value)), "error-total", "* El email debe ser valido");
      validacionDeCampos($contrasenia, $contrasenia.value.length < 8 || $email.value == $contrasenia.value, "error-total", "* La contraseña debe tener al menos 8 caracteres");
      validacionDeCampos($confirmarContrasenia, $confirmarContrasenia.value.length < 8 || $email.value == $confirmarContrasenia.value, "error-total", "* La contraseña debe tener al menos 8 caracteres");
      validacionDeCampos(terminosCondiciones, !terminosCondiciones.checked, "error-terminosCondiciones", "* Por favor acepta los términos y condiciones");
      validacionDeCampos($confirmarContrasenia, $confirmarContrasenia.value != $contrasenia.value || $contrasenia.value == "" || $confirmarContrasenia.value == "", "error-total", "* Las contraseñas no coinciden");
      

      //Verifica si hay errores en los campos
      if($hayError || !$terminosCondiciones.checked || !(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value))) {
        e.preventDefault();
      }
    });
    

});
