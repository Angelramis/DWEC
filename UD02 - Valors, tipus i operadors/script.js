//Numeros
let a = 10;
let b = 5.54;
let c = 3.768e6;
const pi = 3.1415 //constant. No pot modificar valor.

//Aritmètica
console.log(100 * (2 + 5));
console.log(10 + 5);
console.log(5 - 1);
console.log(500 / 2);
console.log(100 % 5); //Obtener residuo

//Números especials
//Infinity i- Intinity
//NaN

//Cadenes (string)
//No es declaren el tipus de dada
console.log('simples');
console.log("dobles");
console.log(`accents`);

//Salt de linia
console.log("Salt\nde\nlinia");

let cadena = "nar";
console.log("con" + "ca" + "te" + cadena); //Concatenar

console.log("La meitat de 100 és " + (100 / 2));

let calcul = 100 / 2;
console.log(`La meitat de 100 és ${calcul}`);

//Operadors unaris
console.log(typeof 4.5); //Diu el tipus de dada.typeof Espai valor

console.log(typeof calcul);

//Binaris -> + i *

//Boolean
// true i false
console.log(3 > 2);
console.log(3 < 2);

console.log("Azar" > "Zxac");

console.log("hola" == "Hola"); //== compara valors. === compara valors i tipus
console.log(5 == "5");

console.log("hola" !== "Hola"); //Compara si no es igual

//Operadors lògics
//AND (i) OR (o) NOT (negació)
console.log(true && true);
console.log(true && false);
console.log(true || false); //Si qualsevol es true, torna true

//Operador ternari
console.log(6 > 7 ? "Es veritat" : "Es fals"); //A la esquerra del ? questio, dreta si es vertader o fals donar resposta

//Valors buits
//null, undefined
//null es 0 donat el cas
console.log(8 * null);

//Conversió automàtica de tipus
console.log("5" + 1); //concatena
console.log("6" - 3); //no concatena

//Cortocircuitos de los operadoes || y &&
console.log(null || "joan"); //devuelve el lado derecho al ser true
console.log("pepe" || "joan"); 
console.log(0 || 100);
console.log(0 && 100);

// ?? -> parecido a ||

console.log(0 ?? 100);
console.log(null ?? 100);
