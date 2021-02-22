window.addEventListener('DOMContentLoaded', () => {
  /* window.onresize = function() {
        location.reload()
    } */

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

  //Borrado de todos los productos
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
      modalBorrarTodosLosProductos.style.display = 'block'
  })

  noBorrarTodosLosProductos.addEventListener('click', () => {
      modalBorrarTodosLosProductos.style.display = 'none'
  });

  window.addEventListener('click', (e) => {
      if (e.target == modalBorrarTodosLosProductos) {
          modalBorrarTodosLosProductos.style.display = 'none';
      }
  })

  /* MODAL - DELETE PRODUCT */
  let xProductoABorrar = document.querySelectorAll('.deleteProduct');
    console.log(xProductoABorrar);
  for (let i = 0; i < xProductoABorrar.length; i++) {
    

    //Mostrar Subtotal
    let stocks = document.querySelectorAll('#stockProducto');
    let total = document.querySelector('.totalAPagar');
    let productos = document.querySelectorAll('.producto-carrito');

    function muestraDeSubtotal() {
      let totalInicial = 0;
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].style.display != 'none') {
          let subtotal = productos[i].querySelector('.producto-precio-total');
          if (subtotal) {
            totalInicial += parseInt(subtotal.innerHTML.substr(1));
          }
        }
      }
      return (total.innerHTML = '$' + totalInicial);
    }

    muestraDeSubtotal();

    stocks.forEach((stock) => {
      stock.addEventListener('change', (e) => {
        console.log(stock);
        let price = stock.parentElement.querySelector('.producto-precio');
        let subtotal = stock.parentElement.querySelector(
          '.producto-precio-total'
        );
        subtotal.innerHTML =
          '$' + parseInt(price.innerHTML.substr(1)) * parseInt(stock.value);

        muestraDeSubtotal();
      });
    });
  }

});