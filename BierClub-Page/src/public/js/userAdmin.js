function eliminarUsuario(usuarioId) {
  let modal = document.getElementById(usuarioId)

  console.log(modal);

  modal.style.display = 'block'

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  let btnCancel = modal.querySelector('.input-button-cancel-delete');

  btnCancel.onclick = function() {
    modal.style.display = "none";
  }
}


/* USER ADMIN EDIT  */
/* function eliminarUnUsuario(usuarioId) {
  let modal = document.getElementById(usuarioId)

  modal.style.display = 'block'

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  let btnCancel = modal.querySelector('.input-button-cancel-delete');

  btnCancel.onclick = function() {
    modal.style.display = "none";
  }
} */