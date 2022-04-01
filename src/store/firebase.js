import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export default {
  namespaced: "true",
  state: {},
    mutations: {
      //agregar datos de usuario a firebase
    async addData2(email,password) {
      try {
          const docRef = await addDoc(collection(db, "otroq"), {
            
              //ver error al enviar datos
          email: email,
          contra: password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
        },
    
  },
  actions: {
    async addData( email, password) {
      try {
        const docRef = await addDoc(collection(db, "otroq"), {
          first: email,
          last: password,
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    },
  getters: {},
  modules: {},
};
