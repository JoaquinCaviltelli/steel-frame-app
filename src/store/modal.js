export default ({
    namespaced: 'true',
    state: {
      modalStatus: false,
      modalRegister: false,
  },
    mutations: {
        changeModalStatus(state) {
            state.modalStatus = !state.modalStatus;
            console.log(state.modalStatus);
      },
      changeModalRegister(state) {
        state.modalRegister = !state.modalRegister;
        console.log(state.modalRegister);
      }
  },
  actions: {},
  modules: {},
});
