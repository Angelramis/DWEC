//Ejercicio debajo del mar.

const oceano = "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~";

function contarPeces(cadena) {
  // Buscar la primera cadena de pez.
  const index = cadena.indexOf("><>");
    
  // Si no se encuentra más cadenas de pez devolver 0
  if (index === -1) {
      return 0;
  }
  
  //Sumar pez encontrado y llamar cadena despues de donde se encontró a partir
  //de la longitud del pez
  return 1 + contarPeces(cadena.substring(index + 3));
}

console.log(contarPeces(oceano));

