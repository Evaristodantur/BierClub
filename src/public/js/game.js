let game = document.addEventListener('DOMContentLoaded', () => {

    
    
    const barney = document.querySelector('.barney');
    const grid = document.querySelector('.grid');
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let score = 0;
    let viewWidth = window.innerWidth;

    if(viewWidth <= 1200) {
        window.location = "http://localhost:3000/";
        window.alert('Este juego funciona bien solo para dispositivos con mas de 1200px');
        
    } else {
        window.alert('Para jugar con la tecla "enter" o "espacio", estas listo?');
    }


    

    //Control de salto
    function controlJump(e) {
        //32 es Espacio-Enter
        if(e.keyCode === 32) {
            //Si esta saltando, no va a volver a saltar
            if(!isJumping) {
                isJumping = true;
                jump();
            }
        }
    }

    document.addEventListener('keypress', controlJump);

    
    //BARNEY
    let position = 0;
    //Salto
    function jump() {
        let count = 0;
        //Despues de 20mil salta
        let barneyHaciaArriba = setInterval(function() {

            //VA HACIA ABAJO
            //Cuando barney llega a 15px
            if(count === 25) {
                //Se para
                clearInterval(barneyHaciaArriba);
                //Empieza a bajar hasta que llega a la posicion 0
                let barneyHaciaAbajo = setInterval(function() {
                    if(count === 0) {
                        clearInterval(barneyHaciaAbajo);
                        //Setea el salto para saltar, porque ya esta en el suelo
                        isJumping = false;
                    }
                    position -= 1
                    count--;
                    position *= gravity;
                    barney.style.bottom = position + 'px';
                }, 20)
                
            }

            //VA HACIA ARRIBA
            //Si no se complio los 150p, barney sigue subiendo
            console.log('up');
            position += 50; //Salta 30px
            count++; //Cuenta cuantas veces salto
            position *= gravity; //Le agrega la gravedad
            barney.style.bottom = position + 'px';
        }, 20)
    }



    //Creacion de los MOES
    function generateMoes() {
        let randomTime = Math.random() * 4000;
        let moePosition;

              
        //Para diferentes resoluciones de pantalla hasta 1200px
        //1600px para arriba
        if(viewWidth > 1600) {
            moePosition = 1600;
        }

        //1600 - 1500px
        if(viewWidth < 1600 && viewWidth > 1500) {
            moePosition = 1200;
        }

        //1500 - 1300px
        if(viewWidth < 1500 && viewWidth > 1300) {
            moePosition = 1000;
        }

        //1300 - 1200px
        if(viewWidth < 1300 && viewWidth > 1200) {
            moePosition = 950;
        }
        

        //Creo un div, con la clase del obstaculo
        const moe = document.createElement('div');

        //Si el juego no termino, agrego otro obstaculo
        if(!isGameOver) {
            moe.classList.add('moeStyle');
            
        }
        grid.appendChild(moe);
        moe.style.left = moePosition + 'px';

        //Cada cierto tiempo sale otro moe
        let moeHaciaLaIzquierda = setInterval(function(){

            //Se fija si no se chocan
            if(moePosition > 6 && moePosition < 180 && position < 180) {
                clearInterval(moeHaciaLaIzquierda);
                
                isGameOver = true;

                if(isGameOver) {
                    if(window.confirm(`Tu score fue: ${score}, ¿Desea volver a jugar?`)) {
                        window.location = "http://localhost:3000/game";
                    } else {
                        //Remueve todos los hijos
                        while(grid.firstChild) {
                            grid.removeChild(grid.lastChild);
                        }
                    }
                }
                
                
            }

            moePosition -= 15;
            moe.style.left = moePosition + 'px';

            //Suma puntos
            if(moePosition < 10 && moePosition > -10 || moePosition == 0) {
                score++;
            }
            
        },20)
        //Si el juego no termino sigue andando
        if(!isGameOver) {
            setTimeout(generateMoes, randomTime);
        }
        
    }

    

    //Genera mas moes
    generateMoes();
})