window.addEventListener('load', () => {

    function sendNewsletterNotification() {
        let modalNewsletter = document.getElementById('modal-newsletter')
        let buttonNewsletter = document.querySelector('#modal-newsletter button');
        let divNewsletter = document.querySelector('#modal-newsletter div.background-newsletter-modal div')

        if(modalNewsletter != null) {
            modalNewsletter.style.display = 'inline-block';

            if(window.innerWidth <= 1200) { divNewsletter.style.left = '40%'; }
            if(window.innerWidth <= 900) { divNewsletter.style.left = '37%'; }
            if(window.innerWidth <= 750) { divNewsletter.style.left = '32%'; }
            if(window.innerWidth <= 600) { divNewsletter.style.left = '25%'; }
            if(window.innerWidth <= 500) { divNewsletter.style.left = '20%'; }
            if(window.innerWidth <= 400) { divNewsletter.style.left = '12%'; }
            if(window.innerWidth <= 350) { divNewsletter.style.left = '6%'; }
            if(window.innerWidth <= 325) { divNewsletter.style.width = '263px'; divNewsletter.style.left = '9%'; }
            if(window.innerWidth <= 315) { divNewsletter.style.left = '6%'; }
            if(window.innerWidth <= 300) { divNewsletter.style.left = '1%'; }
            if(window.innerWidth <= 290) { divNewsletter.style.left = '0%'; }
            
            
            buttonNewsletter.addEventListener('click', () => {
                modalNewsletter.style.display = 'none';
            });
            
            document.querySelector('#modal-newsletter div.background-newsletter-modal').addEventListener('click', () =>{
                modalNewsletter.style.display = 'none';
            });
        }
    }

    function productosNovedadesSlider() {
        const next = document.getElementById('product-next')
        const prev = document.getElementById('product-prev')
        const products = document.querySelector('.productsSlider')
        const allProducts = document.querySelectorAll('.productNovedades');

        //Clono los nodos para poder hacer filtrado de novedades
        let cloneProducts = products.cloneNode(true);
        //Lo doy vuelta
        var arrayNodes = Array.from(cloneProducts.children).reverse()

        //Los cambio por los productos en general
        for(let i=0; i < arrayNodes.length; i++) {
            allProducts[i].innerHTML = arrayNodes[i].innerHTML
        }

        //Los muestro como vista inicial
        display_Initial_ProductsView(window.innerWidth >= 1400, 4)
        display_Initial_ProductsView(window.innerWidth < 1400 && window.innerWidth > 1024, 3)
        display_Initial_ProductsView(window.innerWidth <= 1024 && window.innerWidth > 768, 2)
        display_Initial_ProductsView(window.innerWidth <= 768 && window.innerWidth > 525, 1)
        display_Initial_ProductsView(window.innerWidth <= 525, 0)
        

        prev.addEventListener('click', () => {
            products.insertBefore(products.lastElementChild, products.firstElementChild)
            products.firstElementChild.style.display = "flex"
            
            nextOrPrevProduct__InWidth_(5, window.innerWidth >= 1400, "none")
            nextOrPrevProduct__InWidth_(4, window.innerWidth < 1400 && window.innerWidth > 1024, "none")
            nextOrPrevProduct__InWidth_(3, window.innerWidth <= 1024 && window.innerWidth > 768, "none")
            nextOrPrevProduct__InWidth_(2, window.innerWidth <= 768 && window.innerWidth > 525, "none")
            nextOrPrevProduct__InWidth_(1, window.innerWidth <= 525, "none")
            
        })

        next.addEventListener('click', ()=> {

            products.appendChild(products.firstElementChild)
            products.lastElementChild.style.display = "none"

            nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex")
            nextOrPrevProduct__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex")
            nextOrPrevProduct__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex")
            nextOrPrevProduct__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex")
            nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex")

        })

        function nextOrPrevProduct__InWidth_(children, width, childrenStatus) {
            if(width) {
                products.children[children].style.display = childrenStatus
            }
        }

        function display_Initial_ProductsView(width, howManyProducts) {
            if(width) {
                for(let i=0; i < allProducts.length; i++) {
                    if(i > howManyProducts) {
                        allProducts[i].style.display = 'none'
                    }
                }
            }
        }
    }

    //Ejecucion de Funciones
    productosNovedadesSlider();
    sendNewsletterNotification();
});