// STAR WARS: Personajes y edades
/*
Eres un joven padawan que colecciona datos sobre los héroes de Star Wars.
Se te proporcionan dos arrays: 
Uno con los nombres de algunos de estos héroes.
Otro con sus edades (en el episodio IV). Con la indexacion correspondiente a su nombre
en el otro array

*/

const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];

/*
Escribe un programa que combine los datos de ambos arrays en un objeto y los muestre por
consola. Calcula además, la suma de las edades y muéstrala al final.
*/

let numObjeto = 0;
let personajeObjeto = 0;

function combinarDatos(nombre, edad) {
  personajeObjeto[numObjeto] {
    personaje = nombre + ": " + edad;
  }
  numObjeto++
}



let numNombre = 0;
let numEdad = 0;

for (elemento in nombres) {
  combinarDatos(nombres[numNombre], edades[numEdad]);
  numNombre++;
  numEdad++;
  console.log(personaje);
}

// combinarDatos(nombres[0], edades[0])
// console.log(personaje);