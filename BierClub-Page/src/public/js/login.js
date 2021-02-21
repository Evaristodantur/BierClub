document.addEventListener('DOMContentLoaded', () => {
    let $formLogin = document.querySelector('.formulario');
    

/* ==========================================================================
   FORMULARIO DE VALIDACION DE LOGIN
   ========================================================================== */
    $formLogin.addEventListener('submit', (e) => {
        
        let $email = document.getElementById('email');
        let $contrasenia = document.getElementById('contrasenia');
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

                $hayError = true;

            } else {
            
                nombreDelCampo.style.border = "2px solid green";
                if(nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar) != null) {
                    nombreDelCampo.parentElement.querySelector('.' + claseDeErrorAAgregar).remove();
                }

                $hayError = false;
            }
        }

        let emailCondicion = !(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test($email.value));
        let contraseniaCondition = $contrasenia.value.length < 8 || $email.value == $contrasenia.value;

        //Validacion de campos Login
        validacionDeCampos($email, emailCondicion, "error-total", "* El email debe ser valido");
        validacionDeCampos($contrasenia, contraseniaCondition, "error-total", "* La contraseña debe tener al menos 8 caracteres");
            
      
        //Mira si hay errores
        if ($hayError || emailCondicion || contraseniaCondition) {
          e.preventDefault();
        }
        
      
    });


    
    

});