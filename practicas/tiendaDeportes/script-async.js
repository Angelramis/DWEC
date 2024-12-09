/* Programación asíncrona */
/* Mientras se cargan articulos puedes hacer otras cosas */
/* Falta cosa */
function capturaArticulos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([ 
        {id: 1, nombre: "Pelota de fútbol", precio: 20},
        {id: 2, nombre: "Raqueta de tenis", precio: 30}
      ]);
    }, 5000); // Simula un delay de 5 segundos
  });
}

async function mostrarArticulos() {
  const articulos = document.getElementById('articulos');
  
  articulos.innerHTML = "<p>Cargando artículos...</p>";

  const articulosRecuperados = await capturaArticulos(); // Llamada bloqueante

  articulos.innerHTML = articulosRecuperados
                                            .map(function(a) {
                                              return `<p>${a.nombre} - ${a.precio}</p>`; 
                                            })
                                            .join(""); 
  document.getElementById('articulo-add').addEventListener("submit", async function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    // Simulación que lo guardamos en un servidor.
    await new Promise(async function(resolve) {
      setTimeout(resolve, 1000);

      alert(`Artículo añadido: ${a.nombre} - ${a.precio}}€`);
      document.getElementById('articulo-add').reset();

    });
  })
}

mostrarArticulos();