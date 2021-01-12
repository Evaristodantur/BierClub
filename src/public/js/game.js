let hola = document.querySelector('.hola');

hola.addEventListener("keypress", function(e) {
    alert('se apreto la tecla ' + e.key);
})