/* Prueba: Cambio de valor de una variable con una función sin pasarla como
parámetro */

let miNumero = 5;

console.log("Mi numero antes de función: " + miNumero);

function sumarNumeros() {
  miNumero += 1;
}

sumarNumeros()

console.log("Mi numero después de función: " + miNumero);

