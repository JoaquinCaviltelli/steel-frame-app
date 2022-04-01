export default ({
    namespaced: 'true',
    state: {
      modalStatus: true,
  },
    mutations: {
        changeModalStatus(state) {
            state.modalStatus = !state.modalStatus;
            console.log(state.modalStatus);
        },
  },
  actions: {},
  modules: {},
});
