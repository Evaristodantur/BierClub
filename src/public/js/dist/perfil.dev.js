"use strict";

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