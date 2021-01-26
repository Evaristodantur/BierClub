window.addEventListener('DOMContentLoaded', () => {

    window.onresize = function() {
        location.reload()
    }


    
    if(window.innerWidth < 768 ) {
        
        let productos = document.querySelectorAll(".producto-carrito");
        for(let i=0; i < productos.length; i++) {

            let precio = productos[i].querySelector('.producto-precio');
            let divPrecio = document.createElement('div');
            let h4Precio = document.createElement('h4');
            let textPrecio = document.createTextNode('Precio');
            h4Precio.appendChild(textPrecio);
            divPrecio.appendChild(h4Precio);
            precio.parentElement.replaceChild(divPrecio, precio);
            divPrecio.insertAdjacentElement('beforeend', precio);

            
            let cantidad = productos[i].querySelector('.producto-cantidad');
            let divCantidad = document.createElement('div');
            let h4Cantidad = document.createElement('h4');
            let textCantidad = document.createTextNode('Cantidad');
            h4Cantidad.appendChild(textCantidad);
            divCantidad.appendChild(h4Cantidad);
            cantidad.parentElement.replaceChild(divCantidad, cantidad);
            divCantidad.insertAdjacentElement('beforeend', cantidad);

            let subtotal = productos[i].querySelector('.producto-cantidad');
            let divSubtotal = document.createElement('div');
            let h4Subtotal = document.createElement('h4');
            let textSubtotal = document.createTextNode('Subtotal');
            h4Subtotal.appendChild(textSubtotal);
            divSubtotal.appendChild(h4Subtotal);
            subtotal.parentElement.replaceChild(divSubtotal, subtotal);
            divSubtotal.insertAdjacentElement('beforeend', subtotal);
            
        }
        

        
        
    }
});