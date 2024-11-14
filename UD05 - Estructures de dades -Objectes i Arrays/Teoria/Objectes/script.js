// OBJECTES
// declarando {} son para objetos. [] para arrays.
let unCliente = {
  nombre:"Peter Jackson",
  "Dirección del cliente": "c/ desconocida",
  "+-+-+-+": 5,
  pago: { // objeto dentro de objeto
    tipo: "visa",
    tarjeta: "12351535",
    fechaCaducidad: "05/27"
  }
};

// console.log(unCliente);

// //modificar un valor del objeto

// unCliente["nombre"] = "Agustin";

// // imprimir el nombre
// console.log(unCliente["nombre"]);

// // imprimir valor de atributo de objeto dentro de objeto. Punto por punto
// console.log(unCliente.pago["tipo"]);

// asignar de valor de atributo una funcion
// let estudiante = {
//   id: 2,
//   nombre: "Alberto Pinares",
//   diHola: function diHola() {
//     return console.log("Hola");
//   } 
// };

// // console.log(estudiante);
// // console.log(estudiante.diHola());

// // escribiendo un nuevo atributo directamente se crea
// estudiante.edad = 20;

// console.log(estudiante);

// this
// let factura = {
//   descripcion: "factura de prueba",
//   importe: 100.00,
//   iva: 21.00,
//   subtotal: function() {
//     return this.importe;
//   },
//   total: function() { // otra funcion usando this
//     return this.importe + (this.importe * this.iva) /100;
//   }

// };

// console.log(factura.subtotal());
// console.log(factura.total());


// Constructures

// function Web() { // començen amb majuscula els constructors
//   this.url = "http://localhost",
//   this.nombre = "localhost";

//   this.mostrarInfo = function() {
//     return this.nombre + ": " + this.url;
//   }
// };

// // console.log(Web);

// let unweb = new Web();
// unweb.url = "http://fcbarcelona.cat";
// unweb.nombre = "FC Barcelona";

// console.log(unweb.mostrarInfo());

// console.log(unweb);
// console.log(unweb.nombre);


// function Web(url, nombre) { // Pasado por parámetro
//   this.url = url,
//   this.nombre = nombre;

//   this.mostrarInfo = function() {
//     return this.nombre + ": " + this.url;
//   }
// };

// console.log(Web);

// let unweb = new Web(); // nueva instacia y asignamos valores
// unweb.url = "http://fcbarcelona.cat"; 
// unweb.nombre = "FC Barcelona";

// console.log(unweb.mostrarInfo());

// let otraweb = new Web("http://localhost", "localhost"); // Otra instancia
// console.log(otraweb.mostrarInfo());

// prototype
// Web.prototype.visitas = 10;
// unweb.visitas = 25;
// console.log(unweb);


// Añadir una funcion con prototype
// Web.prototype.diHola = function(){
//    return "Hola";
// };

// console.log(unweb.diHola());
// console.log(otraweb.diHola());


// Recorrer un objeto
// let notas = {
//   diw: 8,
//   dwes: 9.5,
//   dwec: 4.9,
//   daw: {
//     test: 2.5,
//     practic: 3.8
//   }
// };

// for (let nota in notas ) {
//   console.log(typeof notas[nota]);
//   console.log(notas[nota]); // Valor de clave
// }


// Desestructuración de objetos

// const persona = {
  //   nombre: "Pere",
  //   edad: 33
  // };
  
  // const {edad, nombre} = persona;
  
  // console.log(nombre, edad);
  
  
  // const nombre = "Toni";
  // const edad = "54";
  
  // const persona = {
  //   nombre,
  //   edad
  // };
  
  // console.log(persona.nombre, persona.edad);
  

// Ordenar matrices de objetos

const ciudades = [
  {
  municipio: "Zaragoza",
  provincia: "Zaragoza"
},
{
  municipio: "Ávila",
  provincia: "Ávila"
},
{
  municipio: "madrid",
  provincia: "madrid"
},
];

ciudades.sort((a,b)=>{
  return a.municipio.localeCompare(b.municipio);
});

console.log(ciudades);