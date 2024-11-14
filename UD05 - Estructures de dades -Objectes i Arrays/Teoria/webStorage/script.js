// sessionStorage es como localStorage pero la información solo aguanta una sesión. Nada más.
//localStorage y sessionStorage

let guardarLS = document.getElementById('guardarLS');
let recuperarLS = document.getElementById('recuperarLS');
let netejarLS = document.getElementById('netejarLS');
let valorsLS = document.getElementById('valorsLS');

let diHola = "Hola";
let diAdios = "Adiós"
let numeros = [1,3,5,7,12];
let factura = {
  numero: 1,
  descripcion: "Taula nova",
  import: 70.95,
  metodoPago: {
    tarjeta: "visa"
  }
};

// Otros métodos de localStorage
// localStorage.length
// localStorage.key
// localStorage.removeItem

// Añadir y guardar en LS
guardarLS.addEventListener('click', ()=> {
  // ejercicio 1

  // Se establece con clave valor
  // localStorage.setItem('diHola', diHola);
  // localStorage.setItem('diAdios', diAdios);

  // ejercicio 2

  // localStorage.setItem('numeros', numeros);
  // localStorage.setItem('factura', JSON.stringify(factura)); // pasarlo como objeto

  // ejercicio 3 sessionStorage
  sessionStorage.setItem('numeros', numeros);
  sessionStorage.setItem('factura', JSON.stringify(factura))

});


// Limpiar LS 
netejarLS.addEventListener('click', ()=> {
  localStorage.clear();
  valorsLS.innerText = "";
});



// Obtener y mostrar elementos de LS
recuperarLS.addEventListener('click', ()=> {
  // ejercicio 1

  // let lsDiHola = localStorage.getItem('diHola', diHola);
  // let lsDiAdios =  localStorage.getItem('diAdios', diAdios);
  // if (lsDiHola) {
  //   valorsLS.innerText = lsDiHola;
  //   valorsLS.innerText = valorsLS.innerText + " " + lsDiAdios;
  // }

  // let numerosLS = localStorage.getItem('numeros', numeros);
  // numerosLS = JSON.parse(numerosLS); // pasar a su tipo de objeto original

  // console.log(numerosLS);
  // console.log(typeof numerosLS);
  // valorsLS.innerText = numerosLS;

  //ejercicio 2

  // let facturaLS = localStorage.getItem('factura', factura);
  // console.log(typeof facturaLS);
  // valorsLS.innerText = facturaLS;

  // ejercicio 3
  let facturaLS = sessionStorage.getItem('factura', factura);
  console.log(typeof facturaLS);
  valorsLS.innerText = facturaLS;

});


