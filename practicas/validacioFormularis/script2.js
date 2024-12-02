/* Copia de seguretat funcional */

/* Captura d'elements del DOM */
const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomUsuari');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/* Funcions */
function mostraError(input, missatge) {
  const formControl  = input.parentElement;
  formControl.className = 'form-control error'; // Sobreescribir su clase
  const label = formControl.querySelector('label');
  // console.log(label);
  const small = formControl.querySelector('small');
  small.innerText = label.innerText + ' ' + missatge;
}

function mostraCorrecte(input) {
  const formControl  = input.parentElement;
  formControl.className = 'form-control correcte';
}

function esEmailValid(email) {
  // javascript validación email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return re.test(String(email.toLowerCase())); // retorna true o false si valida la expresión.
}

function esObligatori(input) {
  if (input.value === '') {
    mostraError(input, ' és obligatori');
  } else {
    mostraCorrecte(input);
  }
}

/* Esdeveniments */
/* Event al enviar formulari */
form.addEventListener('submit', function(e){
  // console.log('Submit');
  e.preventDefault(); // Evitar flash buit

  esObligatori(nomUsuari);

  if (email.value === '') {
    mostraError(email, ' és obligatori');
  } else if (!esEmailValid(email.value)){
    mostraError(email, ' no té un format correcte');
  } else {
    mostraCorrecte(email);
  }

  esObligatori(password);
  esObligatori(password2);

}, false);