import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const db = getFirestore(app);
const auth = getAuth();

export default {
  namespaced: "true",
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser(state) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const email = user.email;
          const displayName = user.displayName;
          const photoURL = user.photoURL;
          state.currentUser = {
            uid,
            email,
            displayName,
            photoURL,
          };
          console.log(state.currentUser);
          console.log(user);
          // ...
        } else {
          // User is signed out
          // ...
          state.currentUser = null;
        }
      });
    },

    //iniciar sesion con google
    googleSignIn(state) {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...

          console.log(error);
        });
    },
  },
  actions: {
    async addData({ commit }, { email, password }) {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          Email: email,
          Contraseña: password,
        });
        console.log("Document written with ID: ", docRef.id);
        changeModalStatus();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    //createUserWithEmailAndPassword
    async createUserWithEmailAndPassword({ commit }, { email, password }) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        commit("setCurrentUser", user);
        commit("modal/changeModalStatus", null, {
          root: true,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    // async signIn
    async signInWithEmailAndPassword({ commit }, { email, password }) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        commit("modal/changeModalStatus", null, {
          root: true,
        });
      } catch (e) {
        alert(e.message);
      }
    },

    //cerrar sesion
    async signOut({ commit }) {
      try {
        await auth.signOut();
        commit("setCurrentUser", null);
      } catch (e) {
        alert(e.message);
      }
    },

    //iniciar sesion con google
    async googleSignIn({ commit }) {
      try {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
        commit("setCurrentUser", user);
        commit("modal/changeModalStatus", null, {
          root: true,
        });
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  getters: {},

  modules: {},
};
