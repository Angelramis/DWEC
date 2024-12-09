function capturaArticulos() {
  const inici = Date.now();

  while((Date.now() - inici) < 1000) {
    console.log("Cargando...");
  }

  return [
    {id: 1, nombre: "Pelota de fútbol", precio: 20},
    {id: 2, nombre: "Raqueta de tenis", precio: 30}
  ];
}

function mostrarArticulos() {
  const articulos = document.getElementById('articulos');
  
  articulos.innerHTML = "<p>Cargando artículos...</p>";

  const articulosRecuperados = capturaArticulos();

  articulos.innerHTML = articulosRecuperados
                                            .map(function(a) {
                                              return `<p>${a.nombre} - ${a.precio}</p>`; 
                                            })
                                            .join(""); 
}


mostrarArticulos();