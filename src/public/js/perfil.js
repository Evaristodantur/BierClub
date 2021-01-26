/* Hide overflow con el boton */

function modificarPerfil() {
  document.getElementById('modificar').classList.toggle('showModificar');
  document.getElementById('body').classList.toggle('hideOverflow');
  usuario.errors = 'undefined';
}

/* ¿Seguro que desea eliminar este usuario? OnClick */
function eliminarPerfil() {
  document.getElementById('eliminar-user').classList.toggle('showFlex');
}

/* Hide overflow con el div opaco */
function divTransparencia() {
  document.getElementById('modificar').classList.toggle('showModificar');
  document.getElementById('body').classList.toggle('hideOverflow');
  usuario.errors = 'undefined';
}


document.addEventListener('DOMContentLoaded', () => {
      let $formModificarUser = document.querySelector('.formulario');
      
/* ==========================================================================
   FORMULARIO DE VALIDACION DE PERFIL A MODIFICAR
   ========================================================================== */
      $formModificarUser.addEventListener('submit', (e) => {
        
        let $nombre = document.getElementById('nombre');
        let $email = document.getElementById('email');
        let $antiguaContrasenia = document.getElementById('antiguaContrasenia');
        let $nuevaContrasenia = document.getElementById('contrasenia');
        let $confirmarContrasenia = document.getElementById('confirmarContrasenia');
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

        let nombreCondicion = $nombre.value.length < 3;
        let emailCondicion = !(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value));
        let antiguaContraseniaCondicion = $antiguaContrasenia.value.length < 8;
        let nuevaContraseniaCondicion = $nuevaContrasenia.value.length < 8 || $email.value == $nuevaContrasenia.value
        let confirmarContraseniaCondicion = $confirmarContrasenia.value.length < 8 || confirmarContrasenia.value != $nuevaContrasenia.value

        validacionDeCampos($nombre, nombreCondicion, "error-total", "El nombre debe tener al menos 2 caracteres");
        validacionDeCampos($email, emailCondicion, "error-total", "* El email debe ser valido");
        validacionDeCampos($antiguaContrasenia, antiguaContraseniaCondicion, "error-total", "* La contraseña debe tener al menos 8 caracteres")
        validacionDeCampos($nuevaContrasenia, nuevaContraseniaCondicion, "error-total", "* La contraseña debe tener al menos 8 caracteres y ser distitnta del email");
        validacionDeCampos($confirmarContrasenia, confirmarContraseniaCondicion, "error-total", "* Debe ser igual a contraseña nueva");
      
        if ($hayError || nombreCondicion || emailCondicion || antiguaContraseniaCondicion || nuevaContraseniaCondicion || confirmarContraseniaCondicion) {
          e.preventDefault();
        }
      });
});