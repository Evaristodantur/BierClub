window.addEventListener('DOMContentLoaded', () => {

    /* window.onresize = function() {
        location.reload()
    } */

    let tagsH3Productos = document.querySelectorAll('.tagsEspecificosDeProductos h3');
    for(let i=0; i < tagsH3Productos.length; i++) {
        tagsH3Productos[i].style.display = 'none';
    }

    let div = document.createElement('div');
    div.classList.add('divTagPrecioCantidadSubtotal')
    div.innerHTML = `
    <div>
        <h4>Precio: </h4
        <h4>Cantidad: </h4
        <h4>Subtotal:</h4
    </div>
    <div>
    
    </div>`
    console.log(div);
    
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