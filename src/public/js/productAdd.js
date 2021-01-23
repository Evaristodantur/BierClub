window.addEventListener('DOMContentLoaded', () => {
    
    let $formCarga = document.querySelector('.formulario-carga');

    $formCarga.addEventListener('submit', (e) => {
    
      let $nombre = document.getElementById('nombreProducto');
      let $precio = document.getElementById('precio');
      let $descuento = document.getElementById('descuento');
      let $cantidad = document.getElementById('cantidad');
      let $descripcion = document.querySelector('.descripcionDelProducto');
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


      let condicionNombre = $nombre.value.length < 4 || $nombre.value.length > 60;
      let condicionPrecio = $precio.value == "" || $precio.value < 0 || isNaN($precio.value);
      let condicionDescuento = $descuento.value == "" || $descuento.value < 0 || $descuento.value > 100 || isNaN($descuento.value);
      let condicionCantidad = $cantidad.value == "" || $cantidad.value < 0 || isNaN($cantidad.value);
      let condicionDescripcion = $descripcion.value.length > 280;

      validacionDeCampos($nombre, condicionNombre, "errorDeCarga", "* Debe tener entre 3 y 60 caracteres")
      validacionDeCampos($precio, condicionPrecio, "errorDeCarga", "* Debe ser un número positivo");
      validacionDeCampos($descuento, condicionDescuento, "errorDeCarga", "* Debe ser un número del 0 al 100");
      validacionDeCampos($cantidad, condicionCantidad, "errorDeCarga", "* Debe ser un número positivo");
      validacionDeCampos($descripcion, condicionDescripcion, "errorDeCarga", "* Sólo acepta hasta 280 caracteres");

      
      //Verifica si hay errores en los campos
      if ($hayError || condicionNombre || condicionPrecio || condicionDescuento || condicionCantidad || condicionDescripcion) {
        e.preventDefault();
      }

      
    });
});