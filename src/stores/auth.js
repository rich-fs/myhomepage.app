import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    setLoggedIn(status) {
      this.loggedIn = status;
    },
  },
});

export default useAuthStore;
