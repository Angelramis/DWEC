import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { doc, getFirestore, collection, addDoc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";



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

const db = getFirestore();

// Variables
let coleccionCiudades = collection(db, "ciudades");

// FUNCIONES

