<template>
    <div class="modalContainer">
        <div @click="changeModalStatus" class="modalbg"></div>
        <div v-if="!modalRegister" class="modal">
            <h3>INICIAR SESION</h3>
            <form action>
                <input v-model="email" autocomplete="off" type="email" id="email" placeholder="Ingrese su email" />

                <input v-model="password" autocomplete="off" type="text" id="password" placeholder="Ingrese su contraseña" />

                <div class="modalBtn">
                    <button @click="signInWithEmailAndPassword({email,password})" type="submit">Ingresar</button>
                <button @click="googleSignIn" class="btnGoogle" >Ingresar con Google</button>
                </div>
            </form>
            <a @click="changeModalRegister">No estas registrado aun?</a>
        </div>
        <div v-else class="modal" >
            <h3>REGISTRARSE</h3>
            <form action>
                <input v-model="email" autocomplete="off" type="email" id="email" placeholder="Ingrese su email" />

                <input v-model="password" autocomplete="off" type="text" id="password" placeholder="Ingrese su contraseña" />

                <div class="modalBtn">
                    <button @click="createUserWithEmailAndPassword({email,password})" type="submit">Confirmar</button>
                </div>
            </form>
            <a @click="changeModalRegister">Ya estas registrado? ingresa aca</a>
        </div>
    </div>
</template>

<script>
import { mapMutations} from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";


export default {
    name: "ModalSignIn",
    data() {
        return {
            email: "",
            password: ""
        
        };
    },
    methods: {
        ...mapMutations("modal", ["changeModalStatus", "changeModalRegister" ]),
        // ...mapMutations("firebase", ["googleSignIn"]),
        ...mapActions("firebase", ["addData", "createUserWithEmailAndPassword","signInWithEmailAndPassword","signGoogle","googleSignIn"]),   
        
    },
    computed: {
        ...mapState("modal", ["modalStatus", "modalRegister"]),
    },
    
};
</script>

<style scoped>
.modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modalbg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    width: 300px;
    height: 400px;
    background-color: white;
    z-index: 10;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transition: all 1s;
    transform: translateY(-100%);
    opacity: 0;
    animation: swooshIn 0.5s forwards;
}


@keyframes swooshIn {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

h3 {
    border-bottom: solid 2px #2c3e50;
    padding: 20px 0;
    margin-bottom: 10px;
}
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
input,
button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    outline: none;
    
}
button {
    background-color: #2c3e50;
    color: white;
    cursor: pointer;
    margin:5px 0;
}
.btnGoogle{
    background-color: var(--color-secundario)
}
a {
    cursor: pointer;
    font-size: 12px;
}
</style>
