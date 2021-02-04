window.addEventListener('DOMContentLoaded', () => {

    /* window.onresize = function() {
        location.reload()
    } */

    let tagsH3Productos = document.querySelectorAll('.tagsEspecificosDeProductos h3');
    if(window.innerWidth < 525) {
        for (let i = 0; i < tagsH3Productos.length; i++) {
            tagsH3Productos[i].style.display = 'none';
        }    
        
        let productPrice = document.querySelectorAll('.producto-precio');
        let productQuantity = document.querySelectorAll('.producto-cantidad');
        let productSubTotal = document.querySelectorAll('.producto-precio-total');
        for(let i=0; i < productPrice.length; i++) {
            productPrice[i].remove();
            productQuantity[i].remove();
            productSubTotal[i].remove();
        }

    }
    
    
    
    
    /* if(window.innerWidth < 768 ) {
        
        let productos = document.querySelectorAll(".producto-carrito");
        for(let i=0; i < productos.length; i++) {

            crearDivConClase_En_ConTexto_('.producto-precio', productos[i], 'Precio:');

            crearDivConClase_En_ConTexto_('.producto-cantidad', productos[i], 'Cantidad:');

            crearDivConClase_En_ConTexto_('.producto-precio-total', productos[i], 'Subtotal:');
            
        }

        function crearDivConClase_En_ConTexto_(claseABuscar, elemento, textoDeh4) {
            let tagABuscar = elemento.querySelector(claseABuscar);
            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let text = document.createTextNode(textoDeh4);
            h4.appendChild(text);
            div.appendChild(h4);
            div.classList.add('divMobileProductCart');
            tagABuscar.parentElement.replaceChild(div, tagABuscar);
            div.insertAdjacentElement('beforeend', tagABuscar);
        }
        

        
        
    } */
});