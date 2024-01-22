let numeroSecreto = 0;
let contador = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento('p',`acertaste en ${contador} ${(contador==1) ? 'intento': 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        contador ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
