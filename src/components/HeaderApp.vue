<template>
  <header>
    <nav>
      <div class="logo">logo</div>
      <div class="profile">
        <div class="user"></div>
        <div class="login">
          <button @click="changeModalStatus" class="signIn">Iniciar Sesion</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeaderApp",
  data() {
    return {};
  },
  methods: {
       ...mapMutations("modal", ["changeModalStatus"]),
  },

  computed: {
   
  },
};
</script>

<style scoped>
header {
  padding: 0 80px;
  height: 100px;
  background-color: var(--color-principal);
  width: 100%;
  color: white;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

button {
  all: unset;
  color: white;
  cursor: pointer;
  padding: 12px 0;
}
</style>
