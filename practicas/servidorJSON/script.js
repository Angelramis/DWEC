// Referencia al array palabras del json.
const urlPalabras = "http://localhost:3000/palabras";

const url = window.location.pathname; // Saber donde estamos ubicados
if (url.includes("palabras-list.html")) {
  cargarPalabras();
} else if (url.includes("palabras-edit.html")) {
  const parametros = new URLSearchParams(window.location.search);
  const palabraId = parametros.get("id");
  if (palabraId) {
    cargarPalabra(palabraId);
  }
} 

// Si a la funcion le pone sparametro, se ejecutaria simplemente leyendo la linea.
// Con el ? si no encuentra el elemento no da error
document.getElementById('palabra-form')?.addEventListener('submit', guardarPalabra); 

function guardarPalabra(e) {
  e.preventDefault();

  const metodo = id ? "PUT" : "POST";
  const urlGuardar = id ? `${urlPalabras}/${id}` : urlPalabras;

  const palabra = {
    id: "0",
    palabra: document.getElementById("palabra").value,
    dificultad: +document.getElementById("dificultad").value,
  }

  fetch(`${urlPalabras}`)
  .then(response => response.json())
  .then((data)=> {
    if (data && data.length > 0) {
      let idAux = +data[data.length -1] + 1;
      palabra.id = idAux + ''; // truco para pasar number a string
    } else {
      palabra.id = 1 + '';
    }

    return fetch(`${urlGuardar}`, {
      method: metodo,
      body: JSON.stringify(palabra),
      headers: {
        "Content-Type": "application/json",
      }
    });
  })
  .then(() => window.location.href("index.html"))
  .catch((error) => console.log("Error al guardar la palabra:" + error));
}

// Con la sincronia, con un error, el codigo se sigue ejecutando
async function cargarPalabras() {
  try {
    const response = await fetch(urlPalabras);
    const palabras = await response.json();
    const listadoPalabras = document.getElementById('listado-palabras');

    if (palabras.length == 0) {
      listadoPalabras.innerHTML = "<p>No hay palabras registradas</p>";
    } else {
      listadoPalabras.innerHTML = palabras.map((palabra) => {
        `
        <div class="palabra"> 
          <p>${palabra.palabra} - ${palabra.dificultad}</p>
          <button class="eliminar" onclick="eliminarPalabra(${palabra.id})>Eliminar</button>
          <button class="editar" onclick="editarPalabra(${palabra.id})>Editar</button>
        </div>
        `
      }).join("");
    }
  } catch(error) {
    console.log("Error al cargar las palabras: ", error);
  }
}

async function cargarPalabra(id) {
  fetch(urlPalabras)
  .then((response)=>response.json())
  .then((data)=> {
    const palabra = data.find((palabraP)=>palabraP.id == id);
    document.getElementById("palabra").value = palabra.palabra;
    document.getElementById("dificultad").value = palabra.dificultad;
  })
  .catch((error) => console.log("Error al cargar la palabra:" + error));


}


async function eliminarPalabra(id) {
  const urlDelete = `${urlPalabras}/${id}`;

  fetch `${urlDelete}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }
  .then((response)=> response.json())
  .then(()=>cargarPalabras())
  .catch((error)=> console.log("Error al eliminar la palabra ", error));
}

async function editarPalabra(id) {
  // manera de pasar parametros, despues del interrogante, por url. (son públicos)
  window.location.href = `palabras-edit.html?id=${id}`;
}