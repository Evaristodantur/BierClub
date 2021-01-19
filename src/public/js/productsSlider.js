window.onload = function() {
    const slider = document.getElementById('productsSlider');
    const next = document.getElementById('product-next')
    const prev = document.getElementById('product-prev')
    const sliderList = document.getElementById('#')
    const products = document.querySelectorAll('#productArticle')
    let count = 0;


    display_Initial_ProductsView(window.innerWidth >= 1400, 4)
    display_Initial_ProductsView(window.innerWidth < 1400, 3)
    display_Initial_ProductsView(window.innerWidth <= 1024, 2)
    display_Initial_ProductsView(window.innerWidth <= 768, 1)
    display_Initial_ProductsView(window.innerWidth < 525, 0)

    function display_Initial_ProductsView(width, howManyProducts) {
        if(width) {
            for(let i=0; i < products.length; i++) {
                if(i > howManyProducts) {
                    products[i].style.display = 'none'
                }
            }
        }
    }

    display_Products()

    function display_Products(width, howManyProducts) {
        if(width) {
            if(typeof products[count+howManyProducts] != "undefined") {
                products[count+howManyProducts].style.display = "flex"
                products[count].style.display = "none";
                count++;
            } else {
                count = 0;
                for(let i=0; i < products.length; i++) {
                    if(i > (howManyProducts-1)) {
                        products[i].style.display = 'none'
                    } else {
                        products[i].style.display = 'flex'
                    }
                }
            }
        }
    }

    next.addEventListener('click', ()=> {
        console.log(products[count+5]);

        display_Products(window.innerWidth >= 1400, 5)
        display_Products(window.innerWidth < 1400 && window.innerWidth >= 1024, 4)
        display_Products(window.innerWidth < 1024 && window.innerWidth >= 768, 3)
        display_Products(window.innerWidth < 768 && window.innerWidth >= 525, 2)
        display_Products(window.innerWidth < 525, 1)
    })

    prev.addEventListener('click', ()=> {
        /* console.log(products[count+5]);
        if(typeof products[count+5] != "undefined") {
            console.log(products[count+5]);
            products[count+5].style.display = "flex"
            products[count].style.display = "none";
            count++;
        } else {
            count = 0;
            for(let i=0; i < products.length; i++) {
                if(i > 4) {
                    products[i].style.display = 'none'
                } else {
                    products[i].style.display = 'flex'
                }
            }
        } */
    })

    /* if(window.innerWidth < 1024) {
        for(let i=0; i < products.length; i++) {
            if(i > 3) {
                products[i].style.display = 'none'
            }
        }    
    } */
    
    
    
    
    /* window.addEventListener('resize', function(){
        sliderWidth = slider.offsetWidth
        console.log(sliderWidth);
    }) */
    
}