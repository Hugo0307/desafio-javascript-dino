const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pulando = false;
let posicao = 0;
 
function pressionaEspaco(event) {
    if(event.code = 'Space') {
        if(!pulando) pula();
    }
}

const pula = function() {
        
    pulando = true;

    let intervaloSubida = setInterval(() => {
        if(posicao >= 170 ) {
            //parando a subida em 150px
            clearInterval(intervaloSubida);
            
            let intervaloDescida = setInterval(() => {
                if(posicao <= 0) {
                    //parando a descida em 0px
                    clearInterval(intervaloDescida);
                    pulando = false;
                } else {
                    //fazendo descer
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20)
        } else {
            //fazendo subir
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    }, 20)
    
}

function criaCacto() {
    const cacto = document.createElement('div');
    let posicaoCacto = 1200;  
    let randomTime = Math.random() * 6000;
 
    cacto.classList.add('cacto');
    cacto.style.left = posicaoCacto + 'px';
    background.appendChild(cacto);

    let intervaloMoveCacto = setInterval(() => {
        if(posicaoCacto < -100) {
            clearInterval(intervaloMoveCacto);
            background.removeChild(cacto);
        } else if(posicaoCacto >=200 && posicaoCacto <= 250 && posicao < 65) {
            //Fim de jogo 
            clearInterval(intervaloMoveCacto);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo! Tente novamente!</h1>';
        } else {
            posicaoCacto -= 10;
            cacto.style.left = posicaoCacto + 'px';                
        }
           
    }, 20);   

    setTimeout(criaCacto, randomTime); 
}

criaCacto(); 
document.addEventListener('keyup', pressionaEspaco);