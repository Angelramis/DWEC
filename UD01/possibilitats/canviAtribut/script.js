let polar = document.getElementById('polar');

function canviarImatge() {
if(polar.src.match("osoPolar")) {
  polar.src = "./images/coche.jpg"; //Canviar a imatge nova
} else {
  polar.src = "./images/osoPolar.jpg"; //Ruta de la imatge original
}


}