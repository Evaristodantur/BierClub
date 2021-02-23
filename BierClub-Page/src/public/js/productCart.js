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

      let selectDepartamento = document.querySelector('.select-departamento');
      
      // AGREGO LOS DEPARTAMENTOS DENTRO DEL SELECT
      data.departamentos.forEach(departamento => {
        let opt = document.createElement("option");
        opt.value = departamento.nombre;
        opt.text = departamento.nombre;
        selectDepartamento.appendChild(opt)
      });
      
    })
    .catch(err => console.log(err))

  //CHECK ENVIO SELECCIONADO
  let tiposDeEnvio = document.querySelectorAll('.select-tipo-envio');
  let seleccionarDepartamento = document.querySelector('.select-departamento');
  seleccionarDepartamento.style.display = 'none';

  tiposDeEnvio.forEach(tipo => {
    tipo.addEventListener('change', (e) => {
      if(e.target.value == "envio") {
        seleccionarDepartamento.style.display = 'inline-block';  
      } else {
        seleccionarDepartamento.style.display = 'none';
      }
    })
  })
  
  

  // CREACION DE TABLA HEAD DE PRODUCTOS
  let tagsH3Productos = document.querySelectorAll(
    '.tagsEspecificosDeProductos h3'
  );
  if (window.innerWidth < 525) {

    for (let i = 0; i < tagsH3Productos.length; i++) {
      tagsH3Productos[i].style.display = 'none';
    }

    

    //
    let productosAgregados = document.querySelectorAll(
      '.productos-agregados-en-el-carrito'
    );
    productosAgregados.forEach(producto => {
      let precioProducto = producto.querySelector('.producto-precio').innerHTML
      let stockProducto = producto.querySelector('.producto-cantidad').max
      let subtotalProducto = producto.querySelector('.producto-precio-total').innerHTML
      console.log(stockProducto);
      
      let newDivMobile = `
      <div class="divPrecioCantidadSubtotalMobil">
                        <div class="divTags">
                          <h4>Precio: </h4>
                          <h4>Cantidad: </h4>
                          <h4>Subtotal:</h4>
                        </div>
                        <div class="divMobilPrecioCantidadTotal">
                          <h4 class="estilo-letras-producto producto-precio">${precioProducto}</h4>
                          <input class="producto-cantidad stock-pc" name="stock" min="1" max="${stockProducto}" type="number" value="1">
                          <h4 class="estilo-letras-producto producto-precio-total">${subtotalProducto}</h4>
                        </div>
      </div>
    `;
    producto.innerHTML += newDivMobile
    })

    let productPrice = document.querySelectorAll('.producto-precio-pc');
    let productQuantity = document.querySelectorAll('.producto-cantidad-pc');
    let productSubTotal = document.querySelectorAll('.producto-total-pc');
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
        parseInt(e.target.value) <= 0 ||
        e.target.value == ""
      ) {
        window.alert('El stock no puede estar vacio o superar el stock maximo');
        e.target.value = parseInt(e.target.max);
      }
        // MUESTRA EL SUBTOTAL DEL PRODUCTO
        subtotalProducto.innerHTML = `$${
          parseInt(precioProducto.substr(1)) * parseInt(e.target.value)
        }`;

        //SUBTOTAL DE TODOS LOS PRODUCTOS
        subtotalGeneralDelCarrito();
      
    });
  });


});