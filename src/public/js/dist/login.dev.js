"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var $formLogin = document.querySelector('.formulario');
  $formLogin.addEventListener('submit', function (e) {
    var $email = document.getElementById('email');
    var $contrasenia = document.getElementById('contrasenia');
    var $hayError = false; //Funcion para validar campos

    function validacionDeCampos(nombreDelCampo, condicion, claseDeErrorAAgregar, msgDeError) {
      var tagPErrores, textDeError;

      if (condicion) {
        if (nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar) == null) {
          nombreDelCampo.style.border = "2px solid red";
          tagPErrores = document.createElement("p");
          textDeError = document.createTextNode(msgDeError);
          tagPErrores.appendChild(textDeError);
          tagPErrores.classList.add(claseDeErrorAAgregar);
          nombreDelCampo.parentElement.appendChild(tagPErrores);
        }

        $hayError = true;
      } else {
        nombreDelCampo.style.border = "2px solid green";

        if (nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar) != null) {
          nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar).remove();
        }

        $hayError = false;
      }
    } //Validacion de campos Login


    validacionDeCampos($email, !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value), "error-total", "* El email debe ser valido");
    validacionDeCampos($contrasenia, $contrasenia.value.length < 8 || $email.value == $contrasenia.value, "error-total", "* La contraseña debe tener al menos 8 caracteres"); //Mira si hay errores

    if ($hayError || !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value)) {
      e.preventDefault();
    }
  });
});