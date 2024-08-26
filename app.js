/*let titulo = document.querySelector('h1');
titulo.innerHTML='BIENVENIDO AL JUEGO DEL NUMERO';

let parrafo = document.querySelector('p');
parrafo.innerHTML='Ingresa un número';

function intentoUsuario(){

    alert('click desde el boton');
}
    */
   
//vamos a modificar las variables para dejarlas generales a todos los textos

//se deja la variable global 

let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let juegosMaximos = 4;


function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function condicionInicial(){
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p','Indica e número del 1 al 10');
intentos = 1;
numeroSecreto=generarNumeroSecreto();

}
//creamos una variable de bloque que retorna el numero secreto
//las funciones deben ser autodescriptivas 

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.trunc(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta en la lista lo valida 
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')

    }else{

        if (listaNumerosSorteados.length == juegosMaximos ) {
            asignarTextoElemento('p','Ya alcanzaste los juegos maximos posibles')
        }else{

    if (listaNumerosSorteados.includes(numeroGenerado)) {
    //recursividad la funcion que esta creada se llama a si misma asi mismo hace el proceso 
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}}
//capturamos el dato ingresado por el Id

function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('numeroIngresado').value);
    
    if (numeroUsuario === numeroSecreto) {
        //operador ternario resumen del ifelse

        document.getElementById('reiniciar').removeAttribute('disabled');

        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1)? 'vez': 'veces'}`);
                
    }else{
        
        asignarTextoElemento('p', 'SIGUE INTENTANDO');
        //condicional cuando no acierta
        
        if (numeroSecreto<numeroUsuario) {
            
            asignarTextoElemento('p','El numero secreto es menor');
            
        }else{

            asignarTextoElemento('p','El numero secreto es mayor');
            
        }
        limpiarCaja();

    }

    intentos++;

    return;
    
}

//el triple igual valida que sea igual el valor y el tipo de dato
/*
function valorAcertado(){
    
    if (numeroSecreto === numeroUsuario) {

        console.log('GANASTE EL JUEGO')
        
    }console.log('INTENTA NUEVAMENTE');

    return;
}
*/
//obtenemos el elemento
function limpiarCaja(){
/*forma 1 de hacerlo
 let valorCaja = document.querySelector('#numeroIngresado');
 valorCaja.value='';
*/
document.querySelector('#numeroIngresado').value='';

}
function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja();
    // generar numero secreto
    //intentos en cero
    // valores de inicio
    condicionInicial();
   
    //Desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionInicial();