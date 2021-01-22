let dropDownFiltros = (idAModificar, claseATomarPropiedades) => {
  document
    .getElementById(idAModificar)
    .classList.toggle(claseATomarPropiedades);
};

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
