/*let titulo = document.querySelector('h1');
titulo.innerHTML='BIENVENIDO AL JUEGO DEL NUMERO';

let parrafo = document.querySelector('p');
parrafo.innerHTML='Ingresa un número';

function intentoUsuario(){

    alert('click desde el boton');
}
    */
   
//vamos a modificar las variables para dejarlas generales a todos los textos

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

asignarTextoElemento('h1', 'Juego del número secreto')
asignarTextoElemento('p','Indica e número del 1 al 10')


function intentoUsuario(){

    alert('click desde el boton');
}jsahdjksasd 