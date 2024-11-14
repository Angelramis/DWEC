//Definir funcions
// function miFuncion() {

// }

//Altre forma
// const quadrat = function(n){
//   return n * n;
// };

// console.log(quadrat(3));

// const missatge = function( ){
//   console.log("Funció que no retorna res, però que mostra un missatge");
// };

// missatge();

// function redondeoaM(n,m) {
//   //Redondear n al multiplo mas cercano a m.
//   // n = 23, m = 10 -> 20
//   let resto = n% m;
//   return n - resto + (resto < m / 2 ? 0 : m);

// }
// console.log(redondeoaM(23,10));

// //Àmbits

//llamar las variables var está en desuso, porque la hace global siempre.

// let x = 10;

// if (true) { //Global
//   let y = 20; //Local respecto al bloque
// }

// function mitad(n) {
//   return n/2;
// }

// let n = 10;

// console.log(mitad(100)); //50
// console.log(n); //10, aunque se llame igual por el ambito no cambia.

//Ámbito anidado
// function humus(factor) {
//   function ingrediente(cantidad, unidad, nombre) {
//     let cantidadIngrediente = cantidad * factor;
//     if (cantidadIngrediente > 1) {
//       unidad += "s";
//     }
//     console.log(${cantidadIngrediente ${unidad} ${nombre});
//   }
//   ingrediente(1, "lata", "garbanzos");
//   ingrediente(1, "diente", "ajo");
//   ingrediente(0.25, "taza", "jugo de limón");
// }
// humus(1);

//Funcion flecha, usando v2 de funcion
// const redondeoaM = (n,m) =>{

//   let resto = n% m;
//   return n - resto + (resto < m / 2 ? 0 : m);

// };

// let nombre = "Juan";
// const saluda = () => "Hola " + nombre;
// console.log(saluda());

//Tener en cuenta la pila de llamadas

// function gallina() {
//   return huevo();
// }

// function huevo() {
//   return gallina();
// }

// console.log("Qué fue antes, el " + huevo + "o la " + gallina() + "?");

//Parámetros opcionales
//Funciona mientras se respete el orden
//se puede poner un parametro con valor por defecto para evitar undefined
// function quadrat(n, m) {
//   console.log(m);

//   return n * n;
// }

// console.log(quadrat(3, true, "Joan"));

//Cierre o Clausura
// function valor(n){
//   let local = n;
//   return () => local;
// }

// let valor1 = valor(1); //valor1 es una función
// let valor2 = valor(2);

// console.log(valor1());
// console.log(valor2());

//Recursividad
//Cuando una función se llama a ella misma
// function exponencial(base, exponente) {
//   if (exponente == 0) {
//     return 1;
//   } else {
//   return base * exponencial(base, exponente-1);
//   }
// }

// console.log(exponencial(2,3));

//Crecimiento de funciones

//Si se añaden mas animales de la misma forma añadiendolos como parametros
//, la funcion crecera demasiado.
// imprimirInventarioGranja(10, 15);

// function imprimirInventarioGranja(vacas, pollos) {
//   let cadenaVaca = String(vacas);

//   while (cadenaVaca.length < 3) {
//     cadenaVaca = "0" + cadenaVaca;
//   }
//   console.log((`${cadenaVaca} Vacas`));

//   let cadenaPollo = String(pollos);

//   while (cadenaPollo.length < 3) {
//     cadenaPollo = "0" + cadenaPollo;
//   }
//   console.log((`${cadenaPollo} Pollos`));

// }

//Versión 2 mejorada

// function rellenarConCeros(numero, longitud) { //Nombres de funciones concretos
//   let cadenaNumero = String(numero);

//   while (cadenaNumero.length < 3) {
//     cadenaNumero = "0" + cadenaNumero;
//   }
//   return cadenaNumero;

// }

// function imprimirInventarioGranja(vacas, pollos, cerdos) {
//   console.log(`${rellenarConCeros(vacas, 9)} Vacas`);
//   console.log(`${rellenarConCeros(pollos, 5)} Pollos`);
//   console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);
//   // rellenarConCeros(vacas, 'Vacas');
//   // rellenarConCeros(pollos, 'Pollos');
//   // rellenarConCeros(cerdos, 'Cerdos');
// }

// imprimirInventarioGranja(7,18,24);

//Math.min()
// let a = Math.min(2,4);
// console.log(a);



// **EJERCICIOS ** 


//Ejercicio: escribir una función que devuelva el mínimo de 3 números.
//3 argumentos (números) y devuelve el más pequeño de estos.

// function calcularNumeroMenor(num1, num2, num3) {

//   numeroMenor = Math.min(num1, num2, num3);

//   return numeroMenor;
// }

// console.log(calcularNumeroMenor(70, 20, 50));

// Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
    Con %2 para ver si es divisible por dos.
    Existe otra manera de definir si un número es par o impar:
    - 0 es PAR
    - 1 es IMPAR
    - N: su paridad es la misma que N - 2
    Define la función recursiva esPar que corresponda a esta
    descripción. La función debe aceptar un solo parámetro (número
    entero positivo) y devolver un booleano.
    Probar con 50 y 75.
    Ir restando 2 hasta que sea 0 o 1.
*/

//Las funciones recursivas se llaman a ellas mismas, no se hacen bucles.

//Hecho
// function esPar(num) {
//   if (num >= 0 && Number.isInteger(num)) { // Comprovación introducción usuario
//     if (num == 0) {
//       return true;
//     } else if (num == 1) {
//       return false;
//     } else {
//       return esPar(num - 2); //Llamar a ella misma haciendo hasta conseguir el resultado booleano
//     }
//   } else {
//     console.log("El número introducido es decimal o negativo.");
//   }
// }

// console.log(esPar(-10)); //Mensaje pero también devuelve undefined al esperar un booleano
// console.log(esPar(50));
// console.log(esPar(75));


