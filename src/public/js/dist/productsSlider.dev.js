"use strict";

window.addEventListener('DOMContentLoaded', function () {
  function productosNovedadesSlider() {
    var next = document.getElementById('product-next');
    var prev = document.getElementById('product-prev');
    var products = document.querySelector('.productsSlider');
    var allProducts = document.querySelectorAll('.productNovedades'); //Clono los nodos para poder hacer filtrado de novedades

    var cloneProducts = products.cloneNode(true); //Lo doy vuelta

    var arrayNodes = Array.from(cloneProducts.children).reverse(); //Los cambio por los productos en general

    for (var i = 0; i < arrayNodes.length; i++) {
      allProducts[i].innerHTML = arrayNodes[i].innerHTML;
    } //Los muestro como vista inicial


    display_Initial_ProductsView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsView(window.innerWidth < 1400 && window.innerWidth > 1024, 3);
    display_Initial_ProductsView(window.innerWidth <= 1024 && window.innerWidth > 768, 2);
    display_Initial_ProductsView(window.innerWidth <= 768 && window.innerWidth > 525, 1);
    display_Initial_ProductsView(window.innerWidth <= 525, 0);
    prev.addEventListener('click', function () {
      products.insertBefore(products.lastElementChild, products.firstElementChild);
      products.firstElementChild.style.display = "flex";
      nextOrPrevProduct__InWidth_(5, window.innerWidth >= 1400, "none");
      nextOrPrevProduct__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none");
      nextOrPrevProduct__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none");
      nextOrPrevProduct__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none");
      nextOrPrevProduct__InWidth_(1, window.innerWidth <= 525, "none");
      /* if(window.innerWidth >= 1400) {
          products.children[5].style.display = "none"
      }
        if(window.innerWidth < 1400 && window.innerWidth > 1024) {
          products.children[4].style.display = "none"
      }
        if(window.innerWidth <= 1024 && window.innerWidth > 768) {
          products.children[3].style.display = "none"
      }
        if(window.innerWidth <= 768 && window.innerWidth > 525) {
          products.children[2].style.display = "none"
      }
        if(window.innerWidth <= 525) {
          products.children[1].style.display = "none"
      } */
    });
    next.addEventListener('click', function () {
      products.appendChild(products.firstElementChild);
      products.lastElementChild.style.display = "none";
      nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex");
      nextOrPrevProduct__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex");
      nextOrPrevProduct__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex");
      nextOrPrevProduct__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex");
      nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex");
      /* if(window.innerWidth >= 1400) {
          
          products.children[4].style.display = "flex"
      }
        if(window.innerWidth < 1400 && window.innerWidth >= 1024) {
          products.children[3].style.display = "flex"
      }
        if(window.innerWidth <= 1024 && window.innerWidth > 768) {
          products.children[2].style.display = "flex"
      }
        if(window.innerWidth <= 768 && window.innerWidth > 525) {
          products.children[1].style.display = "flex"
      }
        if(window.innerWidth <= 525) {
          products.children[0].style.display = "flex"
      } */
    });

    function nextOrPrevProduct__InWidth_(children, width, childrenStatus) {
      if (width) {
        products.children[children].style.display = childrenStatus;
      }
    }

    function display_Initial_ProductsView(width, howManyProducts) {
      if (width) {
        for (var _i = 0; _i < allProducts.length; _i++) {
          if (_i > howManyProducts) {
            allProducts[_i].style.display = 'none';
          }
        }
      }
    }
  }

  productosNovedadesSlider();
  var nextProductFilter = document.querySelector('.btnSig-Filter');
  var prevProductFilter = document.querySelector('.btnAnt-Filter');
  var productsFilter = document.querySelector('.productFilter'); //Los muestro inicialmente
  //Borro todo lo que no tiene stock

  for (var i = 0; i < productsFilter.children.length; i++) {
    if (productsFilter.children[i].querySelector(".sinStock") != null) {
      productsFilter.removeChild(productsFilter.children[i]);
    }
  } //Checkea el ultimo elemento si no tiene stock


  if (productsFilter.children[productsFilter.children.length - 1].querySelector(".sinStock") != null) {
    productsFilter.removeChild(productsFilter.children[productsFilter.children.length - 1]);
  }

  for (var _i2 = 0; _i2 < productsFilter.children.length; _i2++) {
    if (_i2 > 4) {
      productsFilter.children[_i2].style.display = 'none';
    }
  }

  display_Initial_ProductsStockView(window.innerWidth >= 1400, 4);
  display_Initial_ProductsStockView(window.innerWidth < 1400 && window.innerWidth > 1024, 3);
  display_Initial_ProductsStockView(window.innerWidth <= 1024 && window.innerWidth > 768, 2);
  display_Initial_ProductsStockView(window.innerWidth <= 768 && window.innerWidth > 525, 1);
  display_Initial_ProductsStockView(window.innerWidth <= 525, 0);

  function display_Initial_ProductsStockView(width, howManyProducts) {
    if (width) {
      for (var _i3 = 0; _i3 < productsFilter.children.length; _i3++) {
        if (_i3 > howManyProducts) {
          productsFilter.children[_i3].style.display = 'none';
        }
      }
    }
  }

  function nextOrPrevProductStock__InWidth_(children, width, childrenStatus) {
    if (width) {
      productsFilter.children[children].style.display = childrenStatus;
    }
  }

  nextProductFilter.addEventListener('click', function () {
    productsFilter.appendChild(productsFilter.firstElementChild);
    productsFilter.lastElementChild.style.display = "none";
    nextOrPrevProductStock__InWidth_(4, window.innerWidth >= 1400, "flex");
    nextOrPrevProductStock__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex");
    nextOrPrevProductStock__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex");
    nextOrPrevProductStock__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex");
    nextOrPrevProductStock__InWidth_(0, window.innerWidth <= 525, "flex");
  });
  prevProductFilter.addEventListener('click', function () {
    productsFilter.insertBefore(productsFilter.lastElementChild, productsFilter.firstElementChild);
    productsFilter.firstElementChild.style.display = "flex";
    nextOrPrevProductStock__InWidth_(5, window.innerWidth >= 1400, "none");
    nextOrPrevProductStock__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none");
    nextOrPrevProductStock__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none");
    nextOrPrevProductStock__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none");
    nextOrPrevProductStock__InWidth_(1, window.innerWidth <= 525, "none");
  });
});