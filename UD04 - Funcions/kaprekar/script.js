//Ejercicio: dado un numero introducido de 4 cifras, haz una funcion sin uso
// de recursividad que de como resultado el numero constante de Kaprekar (6174).
// No puede introducirse un numero repetido. Máximo 2 cifras iguales.
// Se necesitan, que haya 4 cifras, si el numero es menor añadir 0 a la izquierda.

// El usuario introduce el numero, a partir de el se obtienen dos más: 
// - El primero con las cifras del numero introducido ordenadas de mayor a menor
// - El segundo con las cifras del numero introducido ordenadas de menor a mayor
// Restamos los dos numeros obtenidos.
// Repetimos el proceso con el resultado de la resta
// Se tiene que resolver en máximo 7 pasos. El programa debe decir en cuantos pasos se
//ha resuelto

// Se tiene que imprimir cada paso que se hace, y ahora modificar el 
// programa para que los pasos los guarde en un array y los imprima como
// Strings individuales.

// function rellenarConCeros(num) {
//   while (num.length < 4) {
//     num = "0" + num;
//   }
//   return num;
// }

// function calcularNumeroKaprekar(num) {
//   let pasos = 0;
//   const numeroObjetivo = 6174;
//   num = num.toString();


//   while (num != numeroObjetivo.toString() && pasos < 7) {
//     pasos++;
  
//     if (num.length > 4) {
//       console.log("El número introducido tiene más de 4 cifras.");
//       return; 
//     } else if (num.length < 4) {
//       num = rellenarConCeros(num);
//     }

//     //Crear y guardar el primer numero descendente con funciones de arrays

//     let numDesc = num.split('').sort((a, b) => b - a).join('');

//     //Crear y guardar el segundo numero ascendente
//     let numAsc = num.split('').sort((a, b) => a - b).join('');
       
//     //  Convertir a int y restarlos
//     num = (parseInt(numDesc) - parseInt(numAsc)).toString(); 
    
//     num = rellenarConCeros(num);
    
//     if (num === numeroObjetivo.toString()) {
//       console.log("El resultado es: " + num + ". Resuelto en " + pasos + " pasos");
//     }  else if (pasos >= 7) {
//       console.log("Se han superado los 7 pasos máximos, el último resultado es: " + num);
//       return;
//     }
//   }
// }

// calcularNumeroKaprekar(7567);
// calcularNumeroKaprekar(3);
// calcularNumeroKaprekar(555557);
// calcularNumeroKaprekar(5555)


//Ejercicio 2: Hacer el ejercicio de Kaprekar usando recursividad.

function rellenarConCeros(num) {
  while (num.length < 4) {
    num = "0" + num;
  }
  return num;
}



function calcularNumeroKaprekarRecursivo(num, pasos = 0) {
  const numeroObjetivo = 6174; 
  num = num.toString(); 


  if (num.length > 4) {
    console.log("El número introducido tiene más de 4 cifras.");
    return;
  } else if (num.length < 4) {
    num = rellenarConCeros(num);
  }


  if (num === numeroObjetivo.toString()) {
    console.log("El resultado es: " + num + ". Resuelto en " + pasos + " pasos");
    return;
  } else if (pasos >= 7) {
    console.log("Se han superado los 7 pasos máximos, el último resultado es: " + num);
    return;
  }

  let numDesc = num.split('').sort((a, b) => b - a).join('');

  let numAsc = num.split('').sort((a, b) => a - b).join('');

  // Convertir a int y restarlos
  num = (parseInt(numDesc) - parseInt(numAsc)).toString(); 

  num = rellenarConCeros(num);

  // Llamar la función recursivamente con nuevo numero y pasos aumentado.
  calcularNumeroKaprekarRecursivo(num, pasos + 1);
}

calcularNumeroKaprekarRecursivo(3759);

// calcularNumeroKaprekarRecursivo(56);
// calcularNumeroKaprekarRecursivo(5555);
// calcularNumeroKaprekarRecursivo(393939);
// calcularNumeroKaprekarRecursivo(7693);