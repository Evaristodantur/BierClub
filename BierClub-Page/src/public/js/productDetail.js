window.addEventListener('DOMContentLoaded', () => {

    window.onresize = function () {
      location.reload();
    };


    /* ==========================================================================
   IMAGENES PREVIEW
   ========================================================================== */
    function imagenesPreview() {
        let imagenes = document.querySelectorAll('.imagen-producto-previews img');
        let imagenPrincipal = document.querySelector('.imagen-producto-principal');


        if(window.innerWidth < 480) {
            let i=-1;

            setInterval(() => {
                if(i >= imagenes.length) {
                    i=0;
                } else {
                    i++;
                }

                tempImagenPrincipal = imagenPrincipal.getAttribute('src');
                tempImgPrev = imagenes[i].getAttribute('src');

                imagenes[i].setAttribute('src', tempImagenPrincipal);
                imagenPrincipal.setAttribute('src', tempImgPrev);

            }, 5000)
        } else {
            for(let i=0; i < imagenes.length; i++) {
                imagenes[i].addEventListener('click', () => {
                    let tempImagenPrincipal = imagenPrincipal.getAttribute('src');
                    let tempImgPrev = imagenes[i].getAttribute('src');
    
                    imagenes[i].setAttribute('src', tempImagenPrincipal);
                    imagenPrincipal.setAttribute('src', tempImgPrev);
                })
            }
        }
        
    }
    



    /* ==========================================================================
   SLIDER DE PRODUCTOS EN STOCK
   ========================================================================== */
   function productosRelacionadosSlider() {
    const $nextProduct = document.querySelector('.btnSig');
    const $prevProduct = document.querySelector('.btnAnt');
    const $productsRelacionados = document.querySelector('.productsSliderRelacionados');

    //Los muestro como vista inicial
    display_Initial_ProductsView(window.innerWidth >= 1400, 4);
    display_Initial_ProductsView(window.innerWidth < 1400 && window.innerWidth > 1024, 3);
    display_Initial_ProductsView(window.innerWidth <= 1024 && window.innerWidth > 768, 2);
    display_Initial_ProductsView(window.innerWidth <= 768 && window.innerWidth > 525, 1);
    display_Initial_ProductsView(window.innerWidth <= 525, 0);
    
    
    //Boton de siguiente producto
    $nextProduct.addEventListener('click', ()=> {
        $productsRelacionados.appendChild($productsRelacionados.firstElementChild);
        if($productsRelacionados.children.length > 5) {
            $productsRelacionados.lastElementChild.style.display = "none";
        }

        nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex");
        nextOrPrevProduct__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex");
        nextOrPrevProduct__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex");
        nextOrPrevProduct__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex");
        nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex");
    });

    //Boton de anterior producto
    $prevProduct.addEventListener('click', ()=> {
        $productsRelacionados.insertBefore($productsRelacionados.lastElementChild, $productsRelacionados.firstElementChild);
        $productsRelacionados.firstElementChild.style.display = "flex";

        nextOrPrevProduct__InWidth_(5, window.innerWidth >= 1400, "none");
        nextOrPrevProduct__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none");
        nextOrPrevProduct__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none");
        nextOrPrevProduct__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none");
        nextOrPrevProduct__InWidth_(1, window.innerWidth <= 525, "none");
    });

    //Function de muestra inicial de los productos al primer loading
    function display_Initial_ProductsView(width, howManyProducts) {
        if(width) {
            for(let i=0; i < $productsRelacionados.children.length; i++) {
                if(i > howManyProducts) {
                    $productsRelacionados.children[i].style.display = 'none';
                }
            }
        }
    }

    //Funcion para pasar al siguiente u anterior producto
    function nextOrPrevProduct__InWidth_(children, width, childrenStatus) {
        if(width) {
            $productsRelacionados.children[children].style.display = childrenStatus;
        }
    }
}


function addProductNoPageReload() {
    let addProductSpecifyBtn = document.querySelector('.btn-agregarAlCarrito');
    addProductSpecifyBtn.addEventListener('click', () => {
      setTimeout(function () {
        window.stop();
      }, 3000);
    });

    let addProductBtn = document.querySelectorAll('.btn-producto');
    for (let i = 0; i < addProductBtn.length; i++) {
        addProductBtn[i].addEventListener('click', () => {
        setTimeout(function () {
            window.stop();
        }, 3000);
        });
    }
}

//Ejecucion de funciones
imagenesPreview();
productosRelacionadosSlider();
addProductNoPageReload();

});