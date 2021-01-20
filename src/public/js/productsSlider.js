window.onload = function() {

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

        })

        next.addEventListener('click', ()=> {

            products.appendChild(products.firstElementChild)
            products.lastElementChild.style.display = "none"

            nextOrPrevProduct__InWidth_(4, window.innerWidth >= 1400, "flex")
            nextOrPrevProduct__InWidth_(3, window.innerWidth < 1400 && window.innerWidth >= 1024, "flex")
            nextOrPrevProduct__InWidth_(2, window.innerWidth <= 1024 && window.innerWidth > 768, "flex")
            nextOrPrevProduct__InWidth_(1, window.innerWidth <= 768 && window.innerWidth > 525, "flex")
            nextOrPrevProduct__InWidth_(0, window.innerWidth <= 525, "flex")


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
    
    productosNovedadesSlider()







    let filterPopulares = document.getElementById('filterPopulares')
    let filterStock = document.getElementById('filterProductosStock')
    let filterBaratos = document.getElementById('filterMasBaratos')
    let nextProductFilter = document.querySelector('.btnSig-Filter')
    let prevProductFilter = document.querySelector('.btnAnt-Filter')

    const productsFilter = document.querySelector('.productFilter')
    const allProductsFilter = document.querySelectorAll('.artProductFilter');

    //Los muestro inicialmente
    if(window.innerWidth >= 1400) {
        for(let i=0; i < allProductsFilter.length; i++) {
            if(i > 4) {
                allProductsFilter[i].style.display = 'none'
            }
        }
    }

    filterPopulares.addEventListener('click', () => {

        
        //Clono los nodos para poder hacer filtrado de novedades
        let cloneProductsFilter = productsFilter.cloneNode(true);
        
        //Lo doy vuelta
        var arrayNodesFilter = Array.from(cloneProductsFilter.children).reverse()
        
        //Los cambio por los productos en general
        for(let i=0; i < arrayNodesFilter.length; i++) {
            allProductsFilter[i].innerHTML = arrayNodesFilter[i].innerHTML
        }

        //arrayNodes[i].querySelector(".etiqueta-precio").textContent.substring(1);
    })
    

    nextProductFilter.addEventListener('click', ()=> {
        productsFilter.appendChild(productsFilter.firstElementChild)
        productsFilter.lastElementChild.style.display = "none"

        if(window.innerWidth >= 1400) {
            productsFilter.children[4].style.display = "flex"
        }
    })


    prevProductFilter.addEventListener('click', ()=> {
        productsFilter.insertBefore(productsFilter.lastElementChild, productsFilter.firstElementChild)
        productsFilter.firstElementChild.style.display = "flex"

        if(window.innerWidth >= 1400) {
            productsFilter.children[5].style.display = "none"
        }
    })

    

    
}