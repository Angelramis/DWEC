/* Elementos DOM */
let registros = JSON.parse(localStorage.getItem("registrosJuego")) || [];
let tbody = document.querySelector("#tabla-records > tbody"); // tbody donde poner registros
let pSinRegistros = document.getElementById("p-sin-registros");


if (registros.length == 0) {
  pSinRegistros.classList.toggle("mostrar");

} else {
  /* Si hay registros, mostrar palabra por fila */
  registros.forEach((registro) => {
    let fila = document.createElement("tr");

    // Crear celda para palabra
    let palabraCelda = document.createElement("td");
    palabraCelda.innerText = registro.palabra;
    fila.appendChild(palabraCelda); // Añadir como elemento siguiente

    // Crear celda para errores
    let erroresCelda = document.createElement("td");
    erroresCelda.innerText = registro.numErrores;
    fila.appendChild(erroresCelda);

    // Crear celda para tiempo
    let tiempoCelda = document.createElement("td");
    tiempoCelda.innerText = registro.tiempoTotal;
    fila.appendChild(tiempoCelda);

    // Añadir fila a tbody
    tbody.appendChild(fila);
  });
}
