window.addEventListener('DOMContentLoaded', () => {
    
    let $formEdit = document.querySelector('.formulario-carga');

    let ficheroInput = document.querySelector('.fileImagenes input');
    let $hayError = false;
    ficheroInput.onchange = imagenesCargadas;

    function imagenesCargadas() {
      console.log(this.files);
      if (this.files.length <= 4) {
        for (let i = 0; i < this.files.length; i++) {
          if (
            this.files[i].type != 'image/png' &&
            this.files[i].type != 'image/jpeg' &&
            this.files[i].type != 'image/jpg'
          ) {
            $hayError = true;
            return implementacionDeErroresImgs(
              '*Hay archivos que se intentaron subir que no son imagenes'
            );
          }
          if (this.files[i].size > 4200000) {
            $hayError = true;
            return implementacionDeErroresImgs(
              '*Debe ser una imágen menor a 4mb'
            );
          }
        }
        $hayError = false;
        let hijos = document
          .querySelector('.fileImagenes')
          .querySelectorAll('.errorDeCarga');
        for (let i = 2; i < hijos.length; i++) {
          hijos[i].remove();
        }
      } else {
        $hayError = true;
        implementacionDeErroresImgs('*Debe ser 4 imágenes como máximo');
      }
    }

    function implementacionDeErroresImgs(msgDeError) {
      let errImagen = document.createElement('p');
      let imgTextErr = document.createTextNode(msgDeError);
      errImagen.appendChild(imgTextErr);
      errImagen.classList.add('errorDeCarga');
      document.querySelector('.fileImagenes').appendChild(errImagen);
    }

    $formEdit.addEventListener('submit', (e) => {
    
      let $nombre = document.getElementById('nombreProducto');
      let $precio = document.getElementById('precio');
      let $descuento = document.getElementById('descuento');
      let $cantidad = document.getElementById('cantidad');
      let $descripcion = document.querySelector('.descripcionDelProducto');
      

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


      let condicionNombre = $nombre.value.length < 3 || $nombre.value.length > 60;
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