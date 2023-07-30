import { defineStore } from 'pinia';

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    imageUrl: '',
  }),
  actions: {
    setimageUrl(url) {
      this.imageUrl = url;
    },
  },
});
