window.onload = function() {
    const slider = document.getElementById('productsSlider');
    const next = document.getElementById('product-next')
    const prev = document.getElementById('product-prev')
    const sliderList = document.getElementById('#')
    const products = document.querySelectorAll('#productArticle')
    let count = 0;

    if(window.innerWidth >= 1200) {
        for(let i=0; i < products.length; i++) {
            if(i > 4) {
                products[i].style.display = 'none'
            }
        }
    }

    if(window.innerWidth < 1200) {
        for(let i=0; i < products.length; i++) {
            if(i > 3) {
                products[i].style.display = 'none'
            }
        }
    }

    next.addEventListener('click', ()=> {
        console.log(products[count+5]);
        if(window.innerWidth >= 1200) {
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
            }
        }

        if(window.innerWidth < 1200) {
            if(typeof products[count+4] != "undefined") {
                console.log(products[count+4]);
                products[count+4].style.display = "flex"
                products[count].style.display = "none";
                count++;
            } else {
                count = 0;
                for(let i=0; i < products.length; i++) {
                    if(i > 3) {
                        products[i].style.display = 'none'
                    } else {
                        products[i].style.display = 'flex'
                    }
                }
            }
        }
            
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