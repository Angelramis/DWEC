import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { doc, getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


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

export async function obtenerCiudad(idCiudad) {
  let ciudad = await getDoc(doc(coleccionCiudades, idCiudad));

  return ciudad;
}

export async function addCiudad(ciudad) {
  await addDoc(coleccionCiudades, ciudad);
}

export async function eliminarCiudad(idCiudad) {
  // Eliminar el elemento con el id especificado
  await deleteDoc(doc(coleccionCiudades, idCiudad));
}

export async function actualizarCiudad(idCiudad, nuevosDatos) {
  await updateDoc(doc(coleccionCiudades, idCiudad), nuevosDatos);
}

// Función para buscar ID de una ciudad en la URL en Firestore
export async function obtenerCiudadPorId(id) {
  let idCiudad = doc(db, "ciudades", id);
  let ciudad = await getDoc(idCiudad);

  // Gestión si se ha encontrado o no la ciudad
  if (ciudad.exists()) {
    return {id: ciudad.id, ...ciudad.data()};
  } else {
    return null;
  }
}