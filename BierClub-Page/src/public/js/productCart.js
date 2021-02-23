window.addEventListener('DOMContentLoaded', () => {
  /* window.onresize = function() {
        location.reload()
    } */

  // DATA FETCH
  fetch('https://apis.datos.gob.ar/georef/api/departamentos?provincia=tucuman')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.departamentos[0].nombre);
      let selectDepartamento = document.querySelector('.select-departamento');
      
      data.departamentos.forEach(departamento => {
        let opt = document.createElement("option");
        opt.value = departamento.nombre;
        opt.text = departamento.nombre;
        selectDepartamento.appendChild(opt)
      });
      
    })
    .catch(err => console.log(err))

  // CREACION DE TABLA HEAD DE PRODUCTOS
  let tagsH3Productos = document.querySelectorAll(
    '.tagsEspecificosDeProductos h3'
  );
  if (window.innerWidth < 525) {
    for (let i = 0; i < tagsH3Productos.length; i++) {
      tagsH3Productos[i].style.display = 'none';
    }

    let productPrice = document.querySelectorAll('.producto-precio');
    let productQuantity = document.querySelectorAll('.producto-cantidad');
    let productSubTotal = document.querySelectorAll('.producto-precio-total');
    for (let i = 0; i < productPrice.length; i++) {
      productPrice[i].remove();
      productQuantity[i].remove();
      productSubTotal[i].remove();
    }
  }


  //Borrado de todos los productos - MODAL
  let modalBorrarTodosLosProductos = document.querySelector(
    '.modal-deleteAllProducts'
  );

  let btnBorrarTodosLosProductos = document.getElementById(
    'borrarTodosLosProducts'
  );

  let noBorrarTodosLosProductos = document.getElementById(
    'closeModalDeleteAllProducts'
  );

  btnBorrarTodosLosProductos.addEventListener('click', () => {
    modalBorrarTodosLosProductos.style.display = 'block';
  });

  noBorrarTodosLosProductos.addEventListener('click', () => {
    modalBorrarTodosLosProductos.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == modalBorrarTodosLosProductos) {
      modalBorrarTodosLosProductos.style.display = 'none';
    }
  });

  //Validacion de que haya suficiente stock - PC
  let stockProducto = document.querySelectorAll('.stock-pc');

  function subtotalGeneralDelCarrito() {
    let subtotalDeTodosLosProductos = document.querySelector('.totalAPagar');
    let subtotalDeCadaProducto = document.querySelectorAll(
      '.producto-precio-total'
    );

    //SUBTOTAL
    let subtotal = 0;
    subtotalDeCadaProducto.forEach((producto) => {
      subtotal += parseInt(producto.innerHTML.substr(1));
    });
    
    subtotalDeTodosLosProductos.innerHTML = `$${subtotal}`;

    //TOTAL A PAGAR
    let selectTipoDeEnvio = document.querySelectorAll('.select-tipo-envio');
    let totalAPagarConEnvio = document.querySelector(
      '.total-de-compra-con-envio'
    );

    // SE FIJA EL TIPO DE ENVIO
    if (selectTipoDeEnvio[0].checked) {
      totalAPagarConEnvio.innerHTML = `$${
        parseInt(subtotalDeTodosLosProductos.innerHTML.substr(1)) + 100
      }`;
    } else {
      totalAPagarConEnvio.innerHTML = subtotalDeTodosLosProductos.innerHTML;
    }

    // SELECCIONA EL TIPO DE ENVIO
    selectTipoDeEnvio.forEach(tipo => {
      tipo.addEventListener('change', (e) => {
        if(e.target.value= "Envio") {
          totalAPagarConEnvio.innerHTML = `$${
            parseInt(subtotalDeTodosLosProductos.innerHTML.substr(1)) + 100
          }`;    
        } else {
          totalAPagarConEnvio.innerHTML = subtotalDeTodosLosProductos.innerHTML;    
        }
      })
    })
    
  }

  subtotalGeneralDelCarrito()
  

  stockProducto.forEach((inputStock) => {
    inputStock.addEventListener('input', (e) => {


      // Busca desde el elemento padre del input, el precio y el subtotal. Al cambiar la cantidad se actualiza el subtotal
      let precioProducto = inputStock.parentElement.querySelector(
        '.producto-precio'
      ).innerHTML;
      let subtotalProducto = inputStock.parentElement.querySelector(
        '.producto-precio-total'
      );

      //Valida si hay stock correspondiente
      if (
        parseInt(e.target.max) < parseInt(e.target.value) ||
        parseInt(e.target.value) <= 0
      ) {
        window.alert('no hay suficiente stock');
        e.target.value = parseInt(e.target.max);
        subtotalGeneralDelCarrito();
      } else {
        // MUESTRA EL SUBTOTAL DEL PRODUCTO
        subtotalProducto.innerHTML = `$${
          parseInt(precioProducto.substr(1)) * parseInt(e.target.value)
        }`;

        //SUBTOTAL DE TODOS LOS PRODUCTOS
        subtotalGeneralDelCarrito();
      }


      
      
    });
  });


});