<template>
  <div id="app">
            <!-- <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
            </div> -->
    
    <ModalSignIn v-if="modalStatus"/>
    <NotificationsPush/>
    <HeaderApp/>
    <router-view/>
  </div>
</template>


<script>
import { mapState } from 'vuex'


import HeaderApp from "./components/HeaderApp.vue";
import ModalSignIn from "./components/ModalSignIn.vue";
import NotificationsPush from './components/NotificationsPush.vue';

export default {
  name: 'Home',
  components: {
    HeaderApp,
    ModalSignIn,
    NotificationsPush
},
computed:{
  ...mapState('modal', ['modalStatus'])
},
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}   
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root{
  --color-principal: #2c3e50;
  --color-secundario: #42b983;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
