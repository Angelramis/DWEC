import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { doc, getFirestore, collection, addDoc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBN2iFLA3CxA4G9tbJcJ02gzLFqS0tX_A8",
  authDomain: "ciudades-a1541.firebaseapp.com",
  projectId: "ciudades-a1541",
  storageBucket: "ciudades-a1541.firebasestorage.app",
  messagingSenderId: "537507692614",
  appId: "1:537507692614:web:c098049eb10b2d0ec28a47"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Variables
let coleccionCiudades = collection(db, "ciudades");

// FUNCIONES

export async function obtenerCiudades() {
  let ciudadesSnapshot = await getDocs(coleccionCiudades);

  // Declarar el contenido y su id generado automáticamente
  let ciudades = ciudadesSnapshot.docs.map(doc => ({
    ...doc.data(), 
    id: doc.id
  }));

  return ciudades;
}

export function obtenerCiudad(idCiudad) {
  let ciudad = getDoc(doc(coleccionCiudades, idCiudad));

  return ciudad;
}

export function addCiudad(ciudad) {
  addDoc(coleccionCiudades, ciudad);
}

export function eliminarCiudad(idCiudad) {
  // Eliminar el elemento con el id especificado
  deleteDoc(doc(coleccionCiudades, idCiudad));
}

export function actualizarCiudad(idCiudad, nuevosDatos) {
  updateDoc(doc(coleccionCiudades, idCiudad), nuevosDatos);
}