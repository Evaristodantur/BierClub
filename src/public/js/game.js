document.addEventListener('DOMContentLoaded', () => {
    const barney = document.querySelector('.barney');
    const grid = document.querySelector('.grid');
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let alert = document.getElementById('alert')

    function controlJump(e) {
        //32 es Espacio-Enter
        if(e.keyCode === 32) {
            //Si esta saltando, no va a volver a saltar
            if(!isJumping) {
                isJumping = true;
                jump()
            }
        }
    }

    document.addEventListener('keyup', controlJump)


    //OBSTACULOS - MOES
    let position = 0
    //Salto
    function jump() {
        let count = 0
        //Despues de 20mil salta
        let timerId = setInterval(function() {

            //VA HACIA ABAJO
            //Cuando barney llega a 15px
            if(count === 15) {
                //Se para
                clearInterval(timerId)
                //Empieza a bajar hasta que llega a la posicion 0
                let downTimerId = setInterval(function() {
                    if(count === 0) {
                        clearInterval(downTimerId)
                        //Setea el salto para saltar, porque ya esta en el suelo
                        isJumping = false;
                    }
                    position -= 5
                    count--
                    position *= gravity
                    barney.style.bottom = position + 'px'
                }, 20)
                
            }

            //VA HACIA ARRIBA
            //Si no se complio los 150p, barney sigue subiendo
            console.log('up');
            position += 30; //Salta 30px
            count++ //Cuenta cuantas veces salto
            position *= gravity; //Le agrega la gravedad
            barney.style.bottom = position + 'px'
        }, 20)
    }



    //Creacion de los MOES
    function generateMoes() {
        let randomTime = Math.random() * 4000

        //Creo un div, con la clase del obstaculo
        let moePosition = 1000
        const moe = document.createElement('div')

        //Si el juego no termino, agrego otro obstaculo
        if(!isGameOver) {
            moe.classList.add('moeStyle')
        }
        grid.appendChild(moe)
        moe.style.left = moePosition + 'px'

        //Cada cierto tiempo sale otro moe
        let timerId = setInterval(function(){

            //Se fija si no se chocan
            if(moePosition > 0 && moePosition < 60 && position < 60) {
                clearInterval(timerId)
                alert.innerHTML = 'Game Over'
                isGameOver = true
                
                //Remueve todos los hijos
                while(grid.firstChild) {
                    grid.removeChild(grid.lastChild)
                }
            }

            moePosition -= 10
            moe.style.left = moePosition + 'px'
            
        },20)

        //Si el juego no termino sigue andando
        if(!isGameOver) {
            setTimeout(generateMoes, randomTime)
        }
    }

    //Genera mas moes
    generateMoes()
})