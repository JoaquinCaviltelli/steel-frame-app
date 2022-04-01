
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc } from "firebase/firestore";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD0c_fAUtamzw11AcswPufpCO82j0QbenA",
    authDomain: "steel-frame-app.firebaseapp.com",
    projectId: "steel-frame-app",
    storageBucket: "steel-frame-app.appspot.com",
    messagingSenderId: "616480481827",
    appId: "1:616480481827:web:4ae5fbd937b43357b04796"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export async function addData() {
  try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
  }
}

