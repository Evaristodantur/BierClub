window.onload = function() {
    const slider = document.getElementById('productsSlider');
    const next = document.getElementById('product-next')
    const prev = document.getElementById('product-prev')
    const products = document.querySelector('.productsSlider')
    const allProducts = document.querySelectorAll('#productArticle');
    let count = 0;
    

    display_Initial_ProductsView(window.innerWidth >= 1400, 4)
    display_Initial_ProductsView(window.innerWidth < 1400 && window.innerWidth > 1024, 3)
    display_Initial_ProductsView(window.innerWidth <= 1024 && window.innerWidth > 768, 2)
    display_Initial_ProductsView(window.innerWidth <= 768 && window.innerWidth > 525, 1)
    display_Initial_ProductsView(window.innerWidth <= 525, 0)
    


    
    prev.addEventListener('click', () => {
        products.insertBefore(products.lastElementChild, products.firstElementChild)
        products.firstElementChild.style.display = "flex"
        products.children[5].style.display = "none"
        if(window.innerWidth >= 1400) {
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
        }

    })

    next.addEventListener('click', ()=> {

        products.appendChild(products.firstElementChild)
        
        products.lastElementChild.style.display = "none"
        if(window.innerWidth >= 1400) {
            
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
        }
    })

    





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