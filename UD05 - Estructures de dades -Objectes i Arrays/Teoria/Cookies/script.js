// Live Server. Inspeccionar > Application > Cookies
let crearCookie = document.getElementById("crearCookie");
let verCookie = document.getElementById("verCookie");

crearCookie.addEventListener('click', creaCookie, false);


function creaCookie() {
  let usuari = "Angel";

  document.cookie = "usuari= " + usuari + "; expires=Tue";
}

verCookie.addEventListener('click', verTodasCookies, false);


function verTodasCookies() {
  // Mostrar y decodificar
  console.log(decodeURIComponent(document.cookie));
}

// Para eliminar una cookie, ponerle caducidad