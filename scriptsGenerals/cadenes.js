// Rellenar numero con ceros
function rellenarConCeros(num, cifra) {
  num = String(num); // Passar a cadena
  while (num.length < cifra) {
    num = "0" + num;
  }
  return num;
}