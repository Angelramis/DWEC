// let numero = Number(prompt("Elige tu número:"));
// console.log("Tu número es la raíz cuadrada de " + numero * numero);

//Condicional
// let numero = Number(prompt("Elige tu número:"));

// //if y else, e if dentro
// if (!Number.isNaN(numero)) { //Si lo introducido es un numero
//   console.log("Tu número es la raíz cuadrada de " + numero * numero);
//   if (numero >= 10) {
//     console.log("Tu numero es más grande o igual que 10");
//   } else {
//     console.log("Tu número es más pequeño que 10");
//   }
  
// } else {
//   console.log("No has introducido un número");
// }


// BUCLES

// while -> repetir una acción hasta que se de una condición

//Imprimir pares hasta un limite
// let numero = 2;
// let limite = 100;

// while(numero <= limite ) {
//   console.log(numero);
//   numero = numero + 2;
// }


//Sumar los números pares de los 100 primeros números que hay.
// let numero = 0;
// let sumaPar = 0;
// let limite = 100;

// while(numero <= limite) {
//   if (numero % 2 == 0) { //Si el numero es par
//    sumaPar = sumaPar + numero;
//   }
//   numero = numero + 1;
// }

// console.log("La suma de los números pares de los 100 primeros números es: " + sumaPar);
//Está bien


//Hacer la potencia de dos numeros preguntados
// let numero1 = Number.prompt("Introduce la base:");
// let numero2 = Number.prompt("Introduce el exponente:");

// let potencia = numero1

// console.log("La potencia de los dos numeros introducidos es: ");
//No acabado


// do while

//Pide tu nombre mientras no pongas nada
// let nombre;

// do {
//   nombre = prompt("Dime tu nombre");
// } while (!nombre);
// console.log(nombre);



// for
// let numero = 3;
// console.log("Valor entes del bucle: " + numero);

// for(numero = 0; numero <= 12; numero++) { /*O numero+= 2 para aumentar a otra cifra*/
//   console.log(numero);
// }

// console.log("Valor después del bucle: " + numero);


//for imprimir els multiples de 5
// let numero = 0;

// for (numero = 0; numero <= 20; numero++) {
//   if (numero % 5 == 0) {
//     console.log(numero);
//   }
// }


//switch - Case
// let pregunta = prompt("¿Qué tiempo hace?");

// switch (pregunta) {
//   case "lluvioso":
//     console.log("Coge un paraguas");
//     break;
//   case "soleado":
//     console.log("Lleva ropa ligera");
//     break;
//   case "nublado":
//     console.log("Puedes salir a la calle");
//     break;
//   default:
//     console.log("Tiempo desconocido");
//     break;
// }

//Mostrar longitud de una cadena
// let cadena = 'hola';
// console.log(cadena.length);



//Ejericio 1
/*
* Escribe un bucle que realice 7 llamadas a clg para que muestre la siguiente figura:
#
##
###
####
#####
######
#######
*/
// Las dos versiones son validas.
// let signo = "#";
// for (signo; signo.length <=7; signo = signo.concat('#')) {
//   console.log(signo);
// }

//Versio 2
// let i;
// let signo = "#";
// for (i = 0; signo.length <=7; i++) {
//   signo = signo.concat('#')
//   console.log(signo);
// }

//Ejercicio 2
/*
* Escribe un programa que use clg para imprimir todos los numeros del 1 al 100
* con dos excepciones:
* para los numeros que sean divisibles por 3, imprime "Jander".
* para los numeros divisibles por 5 (y no por 3), imprime "Clander"
*/

// let numero;
// for(numero = 0; numero <= 100; numero++) {
//   if(numero % 3 == 0) {
//     console.log(numero + " Jander");
//   } else if (numero % 5 == 0) {
//     console.log(numero + " Clander");
//   }
// }



/*
Ejercicio 2 extension pack
Modifica el programa 2 para que imprima "JanderClander" cuando sean divisibles por 3 y 5.
Y siga imprimiendo Jander y Clander para solo uno de esos numeros. Por ejemplo el 15 deberia
salir JanderClander.
*/

// let numero;
// for(numero = 0; numero <= 100; numero++) {
//   if(numero % 3 == 0 && numero % 5 == 0) {
//     console.log(numero + " JanderClander");
//   } else if (numero % 5 == 0) {
//     console.log(numero + " Clander");
//   } else if (numero % 3 == 0) {
//     console.log(numero + " Jander");
//   }
// }



/*
Ejercicio 3
Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de linea para separar las lineas.
En cada posicion del tablero hay un caracter de espacio o un caracter "#".
Los caracteres deben formar un tablero de ajedrez:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

let signo = "#";
let saltoLinea = "\n";
let i;
for (i = 0; i < 50; i++) {
  signo = signo.concat(" ");
  if (signo.length >= 8) {
    signo = signo.concat(saltoLinea);
  }
  console.log(signo);
}





/*Ejercicio 4

Haz un switch que permita al usuario seleccionar cual de los ejercicios hechos
hoy quiere ver.
Y si es el ejercicio del ajedrez, que el programa prgunte de cuanto lo quieres.
*/

