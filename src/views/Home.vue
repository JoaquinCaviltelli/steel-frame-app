<template>
  <div class="home">
      <img src="../assets/blueprints-gc74fd81a2_1920.webp" alt="">
      <div class="container">
        <h1>Calcula los materiales<br> <span>a tu gusto!</span> </h1>
      <div v-if="!currentUser" class="btn-container">
        <button @click="errorSignIn" class="btn-secondary" >Proyectos guardados</button>
        <button @click="errorSignIn" class="btn-primary" >Nuevo Proyecto</button>
      </div>
      <div v-else class="btn-container">
        <router-link to="/Proyectos-guardados"><button class="btn-secondary" >Proyectos guardados</button></router-link>
        <router-link to="/Nuevo-proyecto"><button class="btn-primary" >Nuevo Proyecto</button></router-link>
      </div>
      </div>
  </div>
</template>

<script>

import { mapMutations, mapState, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    errorSignIn(){
      toastr["error"]("Debes iniciar sesion", "Error");
    }
  },
  computed: {
    ...mapState("firebase", ["currentUser"]),
  },
}
</script>

<style>

.home {
 width: 100%;
 height: calc(100vh - 100px);
 color: white


}

.home img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.5);

}
.container{
  width: 100%;
  height: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  max-height: 1000px;
  font-size: 16px;
  padding: 0 80px;
}
h1{
  font-weight: 800;
  font-size: 2.5em;
  text-align: left;
  position: absolute;
  top: 30%;
  left: 40px;
}
span{
  font-weight: 200
}
.btn-container{
  position: absolute;
  bottom: 15%;
  right: 40px;
  font-size: 0.7em;

}
.btn-primary{
  text-decoration: none;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2em;
  margin-right: 10px;
  transition: all 0.3s;
  cursor: pointer;
  
}
/* .btn-secondary{
  text-decoration: none;
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2em;
  transition: all 0.3s;
  cursor: pointer;
} */
.btn-secondary{
  text-decoration: none;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2em;
  margin-left: 10px;
  transition: all 0.3s;
  cursor: pointer;
  background: none
}
</style>