// let numeros = [1, 2, 3, 4];

// console.log(numeros[0]); //Imprimir la primera posición
// console.log(numeros[4]); // Undefined

// // length -> numero de elementos del array
// console.log(numeros.length -1);

// let nombres = ["Angel", "David", "Jorge"];
// console.log(nombres[0]);
// console.log(nombres[2]);

// //Puedes tener arrays de diferentes tipos de elementos
// let mezcla1 = ["Palabra", 10, true];
// console.log(mezcla1[0]);
// console.log(mezcla1[1]);
// console.log(mezcla1[2]);

// console.log(mezcla1);

// // Otra manera de inicializar un array
// let numeros = new Array();
// numeros[0] = 10;
// numeros[1] = 15;

// console.log(numeros);

// // Otra manera de inicializar un array
// let nombres = new Array('Maria', 'Joan');
// console.log(nombres);

// //Indicar longitud inicial de array y con metodo rellenar todos los huecos.
// let array = new Array(5).fill('Angel');
// console.log(array);

// // ** METODOS DE ARRAY **

// //Metodo push() --> Añade al final un o más elementos al final del array.
// let frutas = ['Manzana' ,'Platano', 'Naranja'];
// console.log(frutas);

// frutas.push('Pera'); // Asignar parámetro al final.

// console.log(frutas);


// // Metodo pop() --> Elimina el último elemento del array
// // El elemento eliminado lo retorna, pudiendolo guardar en una variable.

// let frutaEliminada = frutas.pop(); // Eliminar el último elemento y guardarlo

// console.log(frutaEliminada);
// console.log(frutas);

// // shift() -> Elimina el primer elemento del array
// console.log(frutas);
// frutas.shift();
// console.log(frutas); 

// // unshift() -> añadir uno o más elementos al inicio del array
// console.log(frutas);
// frutas.unshift('Kiwi', 'Melón');
// console.log(frutas);

// // concat() -> Combina dos o más arrays y retorna un nuevo array
// console.log(frutas);
// let frutas2 = ['Melocotón', 'Sandía'];
// let combinacion = frutas.concat(frutas2);

// console.log(combinacion);


// slice() -> Devuelve una copia superficial de una porción del array

// let frutas = ['Manzana' ,'Platano', 'Naranja', 'Melon', 'Kiwi', 'Sandía']; 

//Index desde donde empieza y de donde acaba.
// let frutas2 = frutas.slice(0,3);
// let frutas3 = frutas.slice(2,3);

// console.log(frutas2);
// console.log(frutas3);

// splice() -> Cambia el contenido de un array eliminando, reemplazando,
// o agregando elementos.

// let frutas = ['Manzana' ,'Platano', 'Kiwi']; 
// console.log(frutas);

// let frutas2 = frutas.slice(1,1, 'Uvas', 'Sandía');
// console.log(frutas2);

// indexOf() -> Devuelve el primer indice  en el que se encuentra un elemento
// dado en un array o devolviendo -1 si no lo encuentra.

// let frutas = ['Manzana' ,'Platano', 'Kiwi']; 

// const indiceBuscado = frutas.indexOf('Platano');
// const indiceInexistente = frutas.indexOf('platano');

// console.log(indiceBuscado);
// console.log(indiceInexistente);

// Puedes usar toLowerCase() para que no afecte case sensitive:
// let frutas = ['manzana' ,'platano', 'kiwi']; 
// const indiceBuscado = frutas.indexOf('Platano'.toLowerCase());
// console.log(indiceBuscado);


// join() -> Une los todos los elementos de un array en una cadena,
// utilizando un separador especificado
// let frutas = ['Manzana' ,'Platano', 'Kiwi']; 
// let frutasUnion = frutas.join(', ');
// console.log(frutasUnion);


// sort() ordena los elementos de un array alfabeticamente (si son numeros)
// o numericamente (si son numeros)

// let frutas = ['Manzana' ,'Platano', 'Kiwi']; 
// let frutasOrdenadas = frutas.sort();

// console.log(frutasOrdenadas);

// Ordena por valores unicode
// let numeros = [10, 5, 8, 3, 1];
// console.log(numeros);

// numeros.sort()

// console.log(numeros);

// let ciudades = ['Zaragoza', 'madrid', 'Barcelona'];
// ciudades.sort()
// console.log(ciudades);

// sort() tiene un parámetro opcional para solucionar esto.

// let numeros = [10, 5, 8, 3, 1];

// console.log(numeros);

// console.log(numeros.sort(function(a, b) {
//   // Compara las parejas de números  
//   return a - b;
// }));

// // Usando función flecha es más limpio
// console.log(numeros.sort((a, b) =>  a - b));


// let ciudades = ['Zaragoza', 'madrid', 'Ávila', 'Barcelona'];
// // Metodo que no funciona
// // console.log(ciudades.sort((a, b) =>  a.toLowerCase() > b.toLowerCase() ? 1 :
// //                                    -1));

// // Aún no funciona
// ciudades.sort((a,b) => a.localeCompare(b));
// console.log(ciudades);

// let ciudades = ['Zaragoza', 'madrid', 'Ávila', 'Barcelona'];

// Formas de obtener los elementos de los arrays

// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', 'Ávila'];
// for(let i = 0; i < ciudades.length; i++) {
//   console.log(ciudades[i]);
// }
// for(let ciudad in ciudades) {
//   console.log(ciudad);
// }
// for(let ciudad of ciudades) {
//   console.log(ciudad);
// }
// ciudades.forEach(ciudad => {
//   console.log(ciudad.toUpperCase())
// });



// Desestructuración
// const numeros = [1, 2, 3];

// const[a, b, c] = numeros;

// console.log(a);
// console.log(b);
// console.log(c);

// Operador Spread -> añade elementos, donde quieras a un array con ...arrayOriginal

// const numeros = [1, 2, 3];
// const masNumeros = [...numeros,4,5,...numeros, ...[50,60]];
// console.log(numeros);
// console.log(masNumeros);

// Con el operador puedes sumar una cantidad indefinida de numeros.
// function sumar(...numeros) {
//   let resultado = 0;
//   for (let numero of numeros) {
//     resultado += numero;
//   }
//   return resultado;
// }

// // Y sumar numeros de un array.
// const numeros = [5,2,3,5,2,3];+

// console.log(sumar(5,2,3,5,2,3));
// console.log(sumar(...numeros));


// Otros métodos útiles

// forEach() --> Ejecuta una función una vez por cada elemento del array.

// const numeros = [5,9,5,34,22];

// parentesis, parentesis de metodo, flecha, claudator de metodo, enter y ;

// numeros.forEach((numero)=> { // admite un parametro que apunta al elemento del array. Se llama como quieras
//   let resultado = numero *2;
//   console.log(resultado);
// });

// map() -> crea un nuevo array con los resultados de aplicar una funcion a los elementos del array original.
// const numeros = [1,2,4,5,6];

// const dobleNumero = numeros.map((numero)=> {
//   return numero *2;
// });

// console.log(dobleNumero);
// console.log(numeros);

// filter() -> crea un nuevo array con todos los elementos que 
// cumplan una condición determinada.
// const numeros = [1,2,4,5];

// const numerosPares = numeros.filter((numero)=>{ //devolvera solo los pares
//   return numero % 2 == 0;
// });

// console.log(numerosPares);

// reduce() -> aplica una función a un acumulador y a cada elemento 
// del array (de izquierda a derecha) para reducirlo a un único valor.

// const numeros = [1,2,4,5];

// let suma = numeros.reduce((acumula,numero)=>{
//   return acumula + numero;
// });

// console.log(suma);

// find() -> devuelve el PRIMER elemento de izquierda a derecha 
// del array que cumpla una condición determinada.

// const numeros = [1,2,4,5];
// const numeroEncontrado = numeros.find((numero) =>{
//   return numero > 3;

// });

// console.log(numeroEncontrado);

// findIndex()-> devuelve el indice del primer elemento del array que cumple con una función de prueba
// o -1 si no se encuenta. 
// const numeros = [1,2,4,5];
// const indiceEncontrado = numeros.findIndex((numero) =>{
//   return numero > 3;
// });

// console.log(indiceEncontrado);

// some() -> comprueba si al menos un elemento del array cumple 
// una condición determinada.
// const numeros = [1,2,4,5];

// const tieneNumeroPar = numeros.some((numero)=>{
//   return numero % 2 == 0;
// });

// console.log(tieneNumeroPar);

// every() -> comprueba si TODOS los elementos de un array cumplen con
// una condición determinada
// const numeros = [0, 7, 6, 4, 9];
// const sonPares = numeros.every((numero) =>{
//   return numero % 2 == 0;
// });

// console.log(sonPares);


