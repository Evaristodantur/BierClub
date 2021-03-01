/* ==========================================================================
SEARCH
========================================================================== */
// Get the modal
function searchInNav1() {
  let modal = document.getElementById('modal-search-navbar1')
  modal.style.display = 'block';
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

// Get the button that opens the modal
/* var btn = document.querySelector('.fa-search');
console.log(btn);
// Get the <span> element that closes the modal
var span = document.querySelector('.close-search-navbar1');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modalSearch.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSearch.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSearch) {
    modalSearch.style.display = 'none';
  }
} */

/* ==========================================================================
HAMBURGUESA
========================================================================== */

/* ONCLICK HAMBURGUESA ABRIR */
function hamburguesa() {
  document.getElementById('hamburguesa-onclick').style = 'left:10px;';
}
/* ONCLICK HAMBURGUESA CERRAR */
function hamburguesaCerrar() {
  document.getElementById('hamburguesa-onclick').style = 'left:-350px;';
}

/* ONCLICK HAMBURGUESA DROPDOWN */
function hamburguesaDropdown() {
  document
    .getElementById('hamburguesa-dropdown')
    .classList.toggle('showProductos');
}

function transform() {
  document.getElementById('transform').classList.toggle('transform');
}

/* ==========================================================================
NAV BAR FUNCTION SCROLL TO TOP
========================================================================== */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth > 1200) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('navbar').style.margin = '-72px 0px 0px 0px';
      document.getElementById('logonav').style.display = 'inline-block';
      document.getElementById('navcarrito').style.margin = '32px 0px 0px 0px';
      document.getElementById('navlogin').style.margin = '32px 0px 0px 0px';
    } else {
      document.getElementById('navbar').style.margin = '0px 0px 0px 0px';
      document.getElementById('logonav').style.display = 'none';
      document.getElementById('navcarrito').style.margin = '-35px 0px 0px 0px';
      document.getElementById('navlogin').style.margin = '-35px 0px 0px 0px';
    }
  }
}

