<template>
  <header>
    <nav>
      <div class="logo">logo</div>
      <div class="profile">
        <div v-if="currentUser" class="user">
          <img v-if="currentUser.photoURL" :src="currentUser.photoURL" />
          <span v-else class="material-icons"> account_circle </span>
          <span v-if="currentUser.displayName" >{{ currentUser.displayName }}</span>
          <span v-else >{{ currentUser.email }}</span>

        </div>
        <div class="login">
          <span v-if="!currentUser" class="material-icons"> account_circle </span>
          <button @click="signOut" class="signUp" v-if="currentUser">
            Cerrar sesion
          </button>
          <button @click="changeModalStatus" class="signIn" v-else>
            Iniciar Sesion
          </button>
          <!-- else -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions} from "vuex";

export default {
  name: "HeaderApp",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("modal", ["changeModalStatus"]),
    ...mapMutations("firebase", ["setCurrentUser"]),
    ...mapActions("firebase", ["signOut", "onAuthStateChanged"]),
  },

  computed: {
    ...mapState("firebase", ["currentUser"]),
  },
  created() {
    this.setCurrentUser();
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

.profile {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.login {
  display: flex;
  align-items: center;
  gap: 10px;
}
.material-icons {
  font-size: 30px;
}

button {
  all: unset;
  color: white;
  cursor: pointer;
  padding: 12px 0;
}
</style>
