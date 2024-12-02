/* Captura d'elements del DOM */
const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomUsuari');
const nivellAngles = document.getElementById('nivell-angles');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const termes = document.getElementById('termes');

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

function esEmailValid(input) {
  // javascript validación email regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // retorna true o false si valida la expresión.
  // si es valido
  if (re.test(String(input.value).toLowerCase())) {
    mostraCorrecte(input);
  } else {
    mostraError(input, ' no te un format correcte');
  }
}

function esObligatori(inputArray) {

  inputArray.forEach(function(input) {
    // console.log(input);
    if (input.value === '' || (!input.checked)) {
      mostraError(input, ' és obligatori');
    } else {
      mostraCorrecte(input);
    }
  });
}

function comprovaLongitud(input, min, max) {
  if (input.value.length < min ) {
    mostraError(input, ' ha de tenir al menys ' + min + " caràcters");
  } else if (input.value.length > max) {
    mostraError(input, ' ha de tenir màxim ' + max + " caràcters");
  } else {
    mostraCorrecte(input);
  }
}

function comprovaContrassenyesIguals(input1, input2) {
  if (input1.value != input2.value) {
    mostraError(input2, ' ha de concidir');
  }
}

/* Esdeveniments */
/* Event al enviar formulari */
form.addEventListener('submit', function(e){
  e.preventDefault(); // Evitar flash buit

  esObligatori([nomUsuari, email, edat, nivellAngles, password, password2, termes]);

  comprovaLongitud(nomUsuari, 3, 15);
  comprovaLongitud(password, 4, 15);

  esEmailValid(email);
  comprovaContrassenyesIguals(password, password2);
}, false);


/* Retos:
1. Hacer que mensaje de error desaparezca cuando el error se solucione.
2. Fet. Afegeix un camp númeric per l'edat. Afegeix la validacio d'obligatori. 
3. Fet. Afegeix un menu desplegable un l'usuari pogui seleccionar el seu nivell d'
angles (A1, A2, B1, B2, C1, C2). Afegeix una opció inicial que es digui seleccioni
el seu nivell d'angles. Afegeix la valiació de obligatorietat.
4. Fet. Afegeix un control de tipus checkbox per a indicar si l'usuari accepta els termes 
i condicions. Afegeix també la validació d'obligatorietat.
*/