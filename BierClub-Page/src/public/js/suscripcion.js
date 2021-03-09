window.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
   MODAL ERRORES
   ========================================================================== */
  let modalErrorMsg = document.querySelector(".modal-miembro-ya-suscripto");
  let btnCloseModal = document.querySelector(".close-miembro-ya-suscripto");

  if (modalErrorMsg != null) {
    btnCloseModal.onclick = function () {
      modalErrorMsg.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modalErrorMsg) {
        modalErrorMsg.style.display = "none";
      }
    };
  }
});
