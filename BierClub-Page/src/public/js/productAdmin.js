/* MODIFICAR ONCLICK */

function eliminarProducto(productoId) {
  document
    .getElementById('eliminar-' + productoId)
    .classList.toggle('modalEliminarProducto');
  document.getElementById('body').classList.toggle('hideOverflow');
}

function divTransparencia(productoId) {
  document
    .getElementById('eliminar-' + productoId)
    .classList.toggle('modalEliminarProducto');
  document.getElementById('body').classList.toggle('hideOverflow');
}

window.addEventListener('DOMContentLoaded', () => {

  window.onresize = function () {
    location.reload();
  };
  
  function addProductNoPageReload() {
    let addProductBtn = document.querySelectorAll('.btn-agregarAlCarrito');
    for (let i = 0; i < addProductBtn.length; i++) {
      addProductBtn[i].addEventListener('click', () => {
        setTimeout(function () {
          window.stop();
        }, 3000);
      });
    }
  }

  addProductNoPageReload();
})