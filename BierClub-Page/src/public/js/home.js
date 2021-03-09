window.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
   IMAGEN SLIDER + AUTOMATICO
   ========================================================================== */
  function autoImageSlider() {
    let dots = document.querySelectorAll(".imagesBanner input");

    let i = 0;
    setInterval(function () {
      if (i < dots.length) {
        dots[i].checked = true;
        i++;
      } else {
        i = 0;
      }
    }, 5000);
  }

  /* ==========================================================================
   MODAL DE NEWSLETTER NOTIFICATION
   ========================================================================== */
  function sendNewsletterNotification() {
    let $modalNewsletter = document.getElementById("modal-newsletter");
    let $buttonNewsletter = document.querySelector("#modal-newsletter button");
    let $divNewsletter = document.querySelector(
      "#modal-newsletter div.background-newsletter-modal div"
    );

    if ($modalNewsletter != null) {
      $modalNewsletter.style.display = "inline-block";

      //Modal para todas las resoluciones
      if (window.innerWidth <= 1200) {
        $divNewsletter.style.left = "40%";
      }
      if (window.innerWidth <= 900) {
        $divNewsletter.style.left = "37%";
      }
      if (window.innerWidth <= 750) {
        $divNewsletter.style.left = "32%";
      }
      if (window.innerWidth <= 600) {
        $divNewsletter.style.left = "25%";
      }
      if (window.innerWidth <= 500) {
        $divNewsletter.style.left = "20%";
      }
      if (window.innerWidth <= 400) {
        $divNewsletter.style.left = "12%";
      }
      if (window.innerWidth <= 350) {
        $divNewsletter.style.left = "6%";
      }
      if (window.innerWidth <= 325) {
        $divNewsletter.style.width = "263px";
        $divNewsletter.style.left = "9%";
      }
      if (window.innerWidth <= 315) {
        $divNewsletter.style.left = "6%";
      }
      if (window.innerWidth <= 300) {
        $divNewsletter.style.left = "1%";
      }
      if (window.innerWidth <= 290) {
        $divNewsletter.style.left = "0%";
      }

      $buttonNewsletter.addEventListener("click", () => {
        $modalNewsletter.style.display = "none";
      });

      document
        .querySelector("#modal-newsletter div.background-newsletter-modal")
        .addEventListener("click", () => {
          $modalNewsletter.style.display = "none";
        });
    }
  }

  /* ==========================================================================
   SLIDER DE PRODUCTOS CON NOVEDAD
   ========================================================================== */
  function productosNovedadesSlider() {
    const $nextProductNovedad = document.getElementById("product-next");
    const $prevProductNovedad = document.getElementById("product-prev");
    const $productsNovedad = document.querySelector(".productNovedades");

    //Los muestro como vista inicial
    display_Initial_ProductsView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsView(
      window.innerWidth < 1400 && window.innerWidth > 1024,
      3
    );
    display_Initial_ProductsView(
      window.innerWidth <= 1024 && window.innerWidth > 768,
      2
    );
    display_Initial_ProductsView(
      window.innerWidth <= 768 && window.innerWidth > 525,
      1
    );
    display_Initial_ProductsView(window.innerWidth <= 525, 0);

    //Boton de siguiente producto
    $prevProductNovedad.addEventListener("click", () => {
      $productsNovedad.insertBefore(
        $productsNovedad.lastElementChild,
        $productsNovedad.firstElementChild
      );
      $productsNovedad.firstElementChild.style.display = "flex";

      nextOrPrevProduct__InWidth_(5, window.innerWidth >= 1400, "none");
      nextOrPrevProduct__InWidth_(
        4,
        window.innerWidth < 1400 && window.innerWidth > 1024,
        "none"
      );
      nextOrPrevProduct__InWidth_(
        3,
        window.innerWidth <= 1024 && window.innerWidth > 768,
        "none"
      );
      nextOrPrevProduct__InWidth_(
        2,
        window.innerWidth <= 768 && window.innerWidth > 525,
        "none"
      );
      nextOrPrevProduct__InWidth_(1, window.innerWidth <= 525, "none");
    });

    //Boton de anterior producto
    $nextProductNovedad.addEventListener("click", () => {
      $productsNovedad.appendChild($productsNovedad.firstElementChild);
      $productsNovedad.lastElementChild.style.display = "none";

      nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex");
      nextOrPrevProduct__InWidth_(
        3,
        window.innerWidth < 1400 && window.innerWidth >= 1024,
        "flex"
      );
      nextOrPrevProduct__InWidth_(
        2,
        window.innerWidth <= 1024 && window.innerWidth > 768,
        "flex"
      );
      nextOrPrevProduct__InWidth_(
        1,
        window.innerWidth <= 768 && window.innerWidth > 525,
        "flex"
      );
      nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex");
    });

    //Funcion para pasar al siguiente u anterior producto
    function nextOrPrevProduct__InWidth_(children, width, childrenStatus) {
      if (width) {
        $productsNovedad.children[children].style.display = childrenStatus;
      }
    }

    //Function de muestra inicial de los productos al primer loading
    function display_Initial_ProductsView(width, howManyProducts) {
      if (width) {
        for (let i = 0; i < $productsNovedad.children.length; i++) {
          if (i > howManyProducts) {
            $productsNovedad.children[i].style.display = "none";
          }
        }
      }
    }
  }

  /* ==========================================================================
   SLIDER DE PRODUCTOS EN STOCK
   ========================================================================== */
  function productosStockSlider() {
    const $nextProductFilter = document.querySelector(".btnSig-Filter");
    const $prevProductFilter = document.querySelector(".btnAnt-Filter");
    const $productsFilter = document.querySelector(".productFilter");

    //Los muestro como vista inicial
    //Los muestro como vista inicial
    display_Initial_ProductsStockView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsStockView(
      window.innerWidth < 1400 && window.innerWidth > 1024,
      3
    );
    display_Initial_ProductsStockView(
      window.innerWidth <= 1024 && window.innerWidth > 768,
      2
    );
    display_Initial_ProductsStockView(
      window.innerWidth <= 768 && window.innerWidth > 525,
      1
    );
    display_Initial_ProductsStockView(window.innerWidth <= 525, 0);

    //Boton de siguiente producto
    $nextProductFilter.addEventListener("click", () => {
      $productsFilter.appendChild($productsFilter.firstElementChild);
      $productsFilter.lastElementChild.style.display = "none";

      nextOrPrevProductStock__InWidth_(4, window.innerWidth >= 1400, "flex");
      nextOrPrevProductStock__InWidth_(
        3,
        window.innerWidth < 1400 && window.innerWidth >= 1024,
        "flex"
      );
      nextOrPrevProductStock__InWidth_(
        2,
        window.innerWidth <= 1024 && window.innerWidth > 768,
        "flex"
      );
      nextOrPrevProductStock__InWidth_(
        1,
        window.innerWidth <= 768 && window.innerWidth > 525,
        "flex"
      );
      nextOrPrevProductStock__InWidth_(0, window.innerWidth <= 525, "flex");
    });

    //Boton de anterior producto
    $prevProductFilter.addEventListener("click", () => {
      $productsFilter.insertBefore(
        $productsFilter.lastElementChild,
        $productsFilter.firstElementChild
      );
      $productsFilter.firstElementChild.style.display = "flex";

      nextOrPrevProductStock__InWidth_(5, window.innerWidth >= 1400, "none");
      nextOrPrevProductStock__InWidth_(
        4,
        window.innerWidth < 1400 && window.innerWidth > 1024,
        "none"
      );
      nextOrPrevProductStock__InWidth_(
        3,
        window.innerWidth <= 1024 && window.innerWidth > 768,
        "none"
      );
      nextOrPrevProductStock__InWidth_(
        2,
        window.innerWidth <= 768 && window.innerWidth > 525,
        "none"
      );
      nextOrPrevProductStock__InWidth_(1, window.innerWidth <= 525, "none");
    });

    //Function de muestra inicial de los productos al primer loading
    function display_Initial_ProductsStockView(width, howManyProducts) {
      if (width) {
        for (let i = 0; i < $productsFilter.children.length; i++) {
          if (i > howManyProducts) {
            $productsFilter.children[i].style.display = "none";
          }
        }
      }
    }

    //Funcion para pasar al siguiente u anterior producto
    function nextOrPrevProductStock__InWidth_(children, width, childrenStatus) {
      if (width) {
        $productsFilter.children[children].style.display = childrenStatus;
      }
    }
  }


  /* ==========================================================================
   SACA EL ONLOADING DEL PRODUCTO
   ========================================================================== */
  function addProductNoPageReload() {
    let addProductBtn = document.querySelectorAll(".btn-producto");
    for (let i = 0; i < addProductBtn.length; i++) {
      addProductBtn[i].addEventListener("click", () => {
        setTimeout(function () {
          window.stop();
        }, 3000);
      });
    }
  }

  //Ejecucion de Funciones
  autoImageSlider();
  productosNovedadesSlider();
  productosStockSlider();
  addProductNoPageReload();
  sendNewsletterNotification();
});
