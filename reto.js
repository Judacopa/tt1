/*function saludo (nombre){
    nombre = prompt('Ingrese su nombre');
    alert('Hola: '+ nombre)
    
}

saludo();
*/
/*
function numeroDoble(numero){

    numero = parseInt(prompt('Ingresa un número: '));
    numero=numero*2;
    alert('el doble del numero que ingresaste es:' + numero)
    return;
}

numeroDoble();

*/
/*
function numerosPromedio(numero, numero2, numero3){

    numero = parseInt(prompt('ingresa el primer número; '));
    numero2 = parseInt(prompt('ingresa el primer número 2; '));
    numero3 = parseInt(prompt('ingresa el primer número 3; '));
    alert((numero+numero2+numero3)/3);
    return;

}
numerosPromedio();*/
/*
function numMayor(num1, num2){

    num1 = parseInt(prompt('ingresa el primer número: '));
    num2 = parseInt(prompt('ingresa el segundo número: '));

    if (num1>num2) {
        console.log('El numero 1 es mayor y es el: '+ num1)
    } else {
        
        console.log('El numero 2 es mayor y es el: '+ num2)
        
    }
    return;
}

numMayor();*/


/*
let imccal = 0;
function imc (altura, peso){

    altura=parseInt(prompt('ingresa tu altura en cm'));
    peso = parseInt(prompt('ingresa tu peso en kg'));

    imccal = peso /altura;

    return ;
}

let calcularimc = imc();

console.log(calcularimc);

console.log(`el Imc es: ${imccal}`);
*/

/*
function factorial(numero){

    numero=parseInt(prompt('ingresa el numero'));

    let numi = numero-1;

    let valcalculado = numero * numi;
    
   while (numi!=1) {
        numi --;
        valcalculado = valcalculado * numi
           
    }   

    console.log(valcalculado);

    return;
  }

  let calcularFactorial=factorial();

*/
/*
function pasaraDolar(cantidad){

    cantidad = parseInt(prompt('ingresa el valor a convertir'));

    let valor = cantidad *4.80;

    console.log(valor);

    return;
}

let calcular = pasaraDolar();
*/
/*
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
*/
//var calculo = calcularIMC();
/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero -1);
    }
  }
  // Ejemplo de uso
  let numero = 5;

  let resultado = calcularFactorial(numero);

  console.log(`El factorial de ${numero} es ${resultado}`);*/

  let listaGenerica = [];

  let lenguajesDeProgramacion = ['JavaScript', 'C','C++' ,'Kotlin', 'Python'];
  
  lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

  function verLenguajesDeProgramacion(){

     return console.log(lenguajesDeProgramacion);
    
  }

  //let consultaLenguaje = verLenguajesDeProgramacion();

  function consultaInversa(){

  return console.log(lenguajesDeProgramacion.reverse());

  }

 // let consulta = consultaInversa();

 let num =[];

 num.push(1,2,3,4,5,6,7);

 num.
 console.log(num);




