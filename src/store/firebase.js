import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//importar router
import router from "../router";

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
          // ...
        } else {
          // User is signed out
          // ...
          state.currentUser = null;
        }
      });
    },

    //enviar al home si CurrentUser es null
    sendToHome(state) {
      if (state.currentUser === null) {
        if(router.currentRoute.name !== 'Home'){
          router.push({ name: "Home" });
        }
      }
    }

  
    
  },
  actions: {
    // async addData({ commit }, { email, password }) {
    //   try {
    //     const docRef = await addDoc(collection(db, "usuarios"), {
    //       Email: email,
    //       Contraseña: password,
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //     changeModalStatus();
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // },

    //crear nuevo usuario con email y contraseña
    async createUserWithEmailAndPassword(
      { commit },
      { email, password, name }
    ) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //agregar displayName a user
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        user.user.displayName = name;
        commit("setCurrentUser", user);
        commit("modal/changeModalStatus", null, {
          root: true,
        });
      } catch (e) {
        console.log(e.message);
        if (e.message === "Firebase: Error (auth/invalid-email).") {
          toastr["error"]("El correo debe ser valido", "Error");
        }
        if (e.message === "Firebase: Error (auth/internal-error).") {
          toastr["error"]("Email o contraseña incorrecta", "Error");
        }
        if (e.message === "Firebase: Error (auth/email-already-in-use).") {
          toastr["error"]("El correo ya esta en uso", "Error");
        }
        if (
          e.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toastr["error"](
            "La contraseña debe tener al menos 6 digitos",
            "Error"
          );
        }
      }
    },

    // ingresar con email y password
    async signInWithEmailAndPassword({ commit }, { email, password }) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        commit("modal/changeModalStatus", null, {
          root: true,
        });
        toastr["success"](`${user.user.displayName}`, "Bienvenido");
      } catch (e) {
        if (e.message === "Firebase: Error (auth/invalid-email).") {
          toastr["error"]("El correo debe ser valido", "Error");
        }
        if (e.message === "Firebase: Error (auth/user-not-found).") {
          toastr["error"]("El correo no existe", "Error");
        }
        if (e.message === "Firebase: Error (auth/wrong-password).") {
          toastr["error"]("La contraseña es incorrecta", "Error");
        }
        if (e.message === "Firebase: Error (auth/too-many-requests).") {
          toastr["error"]("Demasiados intentos, intente mas tarde", "Error");
        }
        if (e.message === "Firebase: Error (auth/user-disabled).") {
          toastr["error"]("El usuario esta deshabilitado", "Error");
        }
        if (e.message === "Firebase: Error (auth/internal-error).") {
          toastr["error"]("Email o contraseña incorrecta", "Error");
        }
      }
    },

    //Cerrar sesion
    async signOut({ commit }) {
      try {
        await auth.signOut();
        commit("setCurrentUser", null);
        toastr["success"]("Sesion cerrada", "Exito");
        commit("sendToHome");
      } catch (e) {
        toastr["error"]("Error al cerrar sesion", "Error");
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
        toastr["success"](`${user.user.displayName}`, "Bienvenido");
      } catch (e) {
        toastr["error"]("Error al iniciar sesion", "Error");
      }
    },
  },
  getters: {},

  modules: {},
};
