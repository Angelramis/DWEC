// // Creación
let saludo = "Hola";

// console.log(saludo);

// //Constructor
// let saludo1 = new String("Hola");
// console.log(saludo1); // Si tiene claves es un objeto

// console.log(saludo1 + ", Angel"); // Ahora es una cadena

// Propietats
//  length



// console.log(saludo.length);

// Metodes més comuns
// charAt(): Devuelve el carácter del indice especificado dentro de cadena,
// como si cada carácter fuera un elemento de un array

// let caracter = saludo.charAt(0);
// console.log(caracter);

// charCodeAt() devuelvr el codigo unicode del carácter en el indice especificado.

// let codigo = saludo.charCodeAt(3);
// console.log(codigo);

// concat(): combina una o más cadenas
// let saludoCompleto = saludo.concat(", ¿Cómo estás?");
// console.log(saludoCompleto); 

// includes(): verifica si una cadena contiene a otra.

// console.log(saludo.includes("Mundo")); // false

// indexOf(): devuelve el índice de la PRIMERA aparición de una CADENA en otra cadena.

// let indice = saludo.indexOf("la");
// console.log(indice);

// lastIndexOf(): devuelve el índice de la ÚLTIMA aparición de una CADENA en otra cadena.

// let cadena = "hola, hola, adiós y hola";
// let ultimoIndice = cadena.lastIndexOf("hola");

// console.log(ultimoIndice); // 20

// slice(): extrae una parte de la cadena y devuelve una nueva cadena.

// let cadena = "Hola, cara de bola";
// let nuevaCadena = cadena.slice(6, 10); // indice de donde empezar el recorte y de donde acabarlo
// console.log(cadena);
// console.log(nuevaCadena);

// substring(): Similar a slice, pero sin admitir índices negativos
// let cadena = "Hola, cara de bola";
// let nuevaCadena =  cadena.substring(6, 10);
// console.log(nuevaCadena);

// toLowerCase(): pasar a minusculas. toUpperCase(): pasar a mayusculas
// let cadena = "Hola, cara de bola";

// let minus = cadena.toLowerCase()
// console.log(minus);

// let mayus = minus.toUpperCase();
// console.log(mayus);

// replace(): reemplaza una cadena  por otra
// let cadena = "Hola, cara de bola";
// let mayus = cadena.toUpperCase()
// let minus = mayus.toLowerCase().replace("cara", "CARA");
// console.log(minus);

// trim(): elimina espacios en blanco delante y detrás de la cadena.

// let cadenaConEspacios = "           Angel";
// let cadenaSinEspacios = cadenaConEspacios.trim();

// console.log(cadenaConEspacios);
// console.log(cadenaConEspacios.length);
// console.log(cadenaSinEspacios);
// console.log(cadenaSinEspacios.length);

// split(): divide una cadena en un array de subcadenas

// let cadena = "Hola, cara de bola";
// let miArray = cadena.split(' '); // puedes separal los elementos con lo que quieras
// console.log(miArray); // Ahora es un array

// console.log(cadena[1], cadena[6]); // Tratar un carácter como un elemento de un array

