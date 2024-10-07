let numero = 2;
let calculo = 3* 8;
numero = "9"; //Podemos cambiar el valor y tipo instanciando la variable
//si numero es = null lo representara como 0
let compuesta = 5+ numero * calculo;

console.log(compuesta);

//variables de dentro hacia afuera no son validas. De fuera a dentro si.

{
  let pepe = "Pepe";
}

//console.log(pepe); Da error.

//Funciones

//prompt
// let usuario = prompt("Entre su nombre de usuario: ")
// if (usuario == "") {
//   console.log("No ha introducido un nombre");
// }
  
// console.log(usuario);

//console.log(usuario || "No ha introducido un nombre"); otra opción.

//Valors de retorn
console.log(Math.max(10,500)); //mostrar numero más grande
