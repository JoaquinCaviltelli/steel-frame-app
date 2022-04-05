export default ({
    namespaced: 'true',
    state: {
      modalStatus: false,
      modalRegister: false,
  },
    mutations: {
        changeModalStatus(state) {
            state.modalStatus = !state.modalStatus;
        
      },
      changeModalRegister(state) {
        state.modalRegister = !state.modalRegister;
      }
  },
  actions: {},
  modules: {},
});
