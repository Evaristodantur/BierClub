document.addEventListener('DOMContentLoaded', () => {
    const barney = document.querySelector('.barney');
    const grid = document.querySelector('.grid');
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let alert = document.getElementById('alert')

    function control(e) {
        //32 es Espacio-Enter
        if(e.keyCode === 32) {
            //Si esta saltando, no va a volver a saltar
            if(!isJumping) {
                isJumping = true;
                jump()
            }
        }
    }

    document.addEventListener('keyup', control)

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
    function generateObstacle() {
        let randomTime = Math.random() * 4000

        //Creo un div, con la clase del obstaculo
        let obstaclePosition = 1000
        const obstacle = document.createElement('div')
        if(!isGameOver) {
            obstacle.classList.add('obstacle')
        }
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function(){
            if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
                clearInterval(timerId)
                alert.innerHTML = 'Game Over'
                isGameOver = true
                
                //Remueve todos los hijos
                while(grid.firstChild) {
                    grid.removeChild(grid.lastChild)
                }
            }

            obstaclePosition -= 10
            obstacle.style.left = obstaclePosition + 'px'
            
        },20)
        if(!isGameOver) {
            setTimeout(generateObstacle, randomTime)
        }
    }

    
    generateObstacle()
})