"use strict";

window.addEventListener('DOMContentLoaded', function () {
  /* ==========================================================================
  MODAL DE NEWSLETTER NOTIFICATION
  ========================================================================== */
  function sendNewsletterNotification() {
    var $modalNewsletter = document.getElementById('modal-newsletter');
    var $buttonNewsletter = document.querySelector('#modal-newsletter button');
    var $divNewsletter = document.querySelector('#modal-newsletter div.background-newsletter-modal div');

    if ($modalNewsletter != null) {
      $modalNewsletter.style.display = 'inline-block'; //Modal para todas las resoluciones

      if (window.innerWidth <= 1200) {
        $divNewsletter.style.left = '40%';
      }

      if (window.innerWidth <= 900) {
        $divNewsletter.style.left = '37%';
      }

      if (window.innerWidth <= 750) {
        $divNewsletter.style.left = '32%';
      }

      if (window.innerWidth <= 600) {
        $divNewsletter.style.left = '25%';
      }

      if (window.innerWidth <= 500) {
        $divNewsletter.style.left = '20%';
      }

      if (window.innerWidth <= 400) {
        $divNewsletter.style.left = '12%';
      }

      if (window.innerWidth <= 350) {
        $divNewsletter.style.left = '6%';
      }

      if (window.innerWidth <= 325) {
        $divNewsletter.style.width = '263px';
        $divNewsletter.style.left = '9%';
      }

      if (window.innerWidth <= 315) {
        $divNewsletter.style.left = '6%';
      }

      if (window.innerWidth <= 300) {
        $divNewsletter.style.left = '1%';
      }

      if (window.innerWidth <= 290) {
        $divNewsletter.style.left = '0%';
      }

      $buttonNewsletter.addEventListener('click', function () {
        $modalNewsletter.style.display = 'none';
      });
      document.querySelector('#modal-newsletter div.background-newsletter-modal').addEventListener('click', function () {
        $modalNewsletter.style.display = 'none';
      });
    }
  }
  /* ==========================================================================
     SLIDER DE PRODUCTOS CON NOVEDAD
     ========================================================================== */


  function productosNovedadesSlider() {
    var $nextProductNovedad = document.getElementById('product-next');
    var $prevProductNovedad = document.getElementById('product-prev');
    var $productsNovedad = document.querySelector('.productsSlider');
    var $allProductsNovedad = document.querySelectorAll('.productNovedades'); //Clono los nodos para poder hacer filtrado de novedades

    var cloneProducts = $productsNovedad.cloneNode(true); //Lo doy vuelta

    var arrayNodes = Array.from(cloneProducts.children).reverse(); //Los cambio por los productos en general

    for (var i = 0; i < arrayNodes.length; i++) {
      $allProductsNovedad[i].innerHTML = arrayNodes[i].innerHTML;
    } //Los muestro como vista inicial


    display_Initial_ProductsView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsView(window.innerWidth < 1400 && window.innerWidth > 1024, 3);
    display_Initial_ProductsView(window.innerWidth <= 1024 && window.innerWidth > 768, 2);
    display_Initial_ProductsView(window.innerWidth <= 768 && window.innerWidth > 525, 1);
    display_Initial_ProductsView(window.innerWidth <= 525, 0); //Boton de siguiente producto

    $prevProductNovedad.addEventListener('click', function () {
      $productsNovedad.insertBefore($productsNovedad.lastElementChild, $productsNovedad.firstElementChild);
      $productsNovedad.firstElementChild.style.display = "flex";
      nextOrPrevProduct__InWidth_(5, window.innerWidth >= 1400, "none");
      nextOrPrevProduct__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none");
      nextOrPrevProduct__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none");
      nextOrPrevProduct__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none");
      nextOrPrevProduct__InWidth_(1, window.innerWidth <= 525, "none");
    }); //Boton de anterior producto

    $nextProductNovedad.addEventListener('click', function () {
      $productsNovedad.appendChild($productsNovedad.firstElementChild);
      $productsNovedad.lastElementChild.style.display = "none";
      nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex");
      nextOrPrevProduct__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex");
      nextOrPrevProduct__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex");
      nextOrPrevProduct__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex");
      nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex");
    }); //Funcion para pasar al siguiente u anterior producto

    function nextOrPrevProduct__InWidth_(children, width, childrenStatus) {
      if (width) {
        $productsNovedad.children[children].style.display = childrenStatus;
      }
    } //Function de muestra inicial de los productos al primer loading


    function display_Initial_ProductsView(width, howManyProducts) {
      if (width) {
        for (var _i = 0; _i < $allProductsNovedad.length; _i++) {
          if (_i > howManyProducts) {
            $allProductsNovedad[_i].style.display = 'none';
          }
        }
      }
    }
  }
  /* ==========================================================================
  SLIDER DE PRODUCTOS EN STOCK
  ========================================================================== */


  function productosStockSlider() {
    var $nextProductFilter = document.querySelector('.btnSig-Filter');
    var $prevProductFilter = document.querySelector('.btnAnt-Filter');
    var $productsFilter = document.querySelector('.productFilter'); //Borro todo lo que no tiene stock

    for (var i = 0; i < $productsFilter.children.length; i++) {
      if ($productsFilter.children[i].querySelector(".sinStock") != null) {
        $productsFilter.removeChild($productsFilter.children[i]);
      }
    } //Checkea el ultimo elemento si no tiene stock - ya que el for no lo hace


    if ($productsFilter.children[$productsFilter.children.length - 1].querySelector(".sinStock") != null) {
      $productsFilter.removeChild($productsFilter.children[$productsFilter.children.length - 1]);
    } //Los muestro como vista inicial


    display_Initial_ProductsStockView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsStockView(window.innerWidth < 1400 && window.innerWidth > 1024, 3);
    display_Initial_ProductsStockView(window.innerWidth <= 1024 && window.innerWidth > 768, 2);
    display_Initial_ProductsStockView(window.innerWidth <= 768 && window.innerWidth > 525, 1);
    display_Initial_ProductsStockView(window.innerWidth <= 525, 0); //Boton de siguiente producto

    $nextProductFilter.addEventListener('click', function () {
      $productsFilter.appendChild($productsFilter.firstElementChild);
      $productsFilter.lastElementChild.style.display = "none";
      nextOrPrevProductStock__InWidth_(4, window.innerWidth >= 1400, "flex");
      nextOrPrevProductStock__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex");
      nextOrPrevProductStock__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex");
      nextOrPrevProductStock__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex");
      nextOrPrevProductStock__InWidth_(0, window.innerWidth <= 525, "flex");
    }); //Boton de anterior producto

    $prevProductFilter.addEventListener('click', function () {
      $productsFilter.insertBefore($productsFilter.lastElementChild, $productsFilter.firstElementChild);
      $productsFilter.firstElementChild.style.display = "flex";
      nextOrPrevProductStock__InWidth_(5, window.innerWidth >= 1400, "none");
      nextOrPrevProductStock__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none");
      nextOrPrevProductStock__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none");
      nextOrPrevProductStock__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none");
      nextOrPrevProductStock__InWidth_(1, window.innerWidth <= 525, "none");
    }); //Function de muestra inicial de los productos al primer loading

    function display_Initial_ProductsStockView(width, howManyProducts) {
      if (width) {
        for (var _i2 = 0; _i2 < $productsFilter.children.length; _i2++) {
          if (_i2 > howManyProducts) {
            $productsFilter.children[_i2].style.display = 'none';
          }
        }
      }
    } //Funcion para pasar al siguiente u anterior producto


    function nextOrPrevProductStock__InWidth_(children, width, childrenStatus) {
      if (width) {
        $productsFilter.children[children].style.display = childrenStatus;
      }
    }
  } //Ejecucion de Funciones


  productosNovedadesSlider();
  productosStockSlider();
  sendNewsletterNotification();
});