window.onload = function() {
    const slider = document.getElementById('productsSlider');
    const next = document.getElementById('product-next')
    const prev = document.getElementById('product-prev')
    const sliderList = document.getElementById('#')
    const products = document.querySelectorAll('#productArticle')

    console.log(products);
    console.log(products.length);

    if(window.innerWidth > 1200) {
        for(let i=0; i < products.length; i++) {
            if(i > 4) {
                products[i].style.display = 'none'
            }
        }    
    }

    if(window.innerWidth < 1024) {
        for(let i=0; i < products.length; i++) {
            if(i > 3) {
                products[i].style.display = 'none'
            }
        }    
    }
    
    
    
    
    window.addEventListener('resize', function(){
        sliderWidth = slider.offsetWidth
        console.log(sliderWidth);
    })
    
}