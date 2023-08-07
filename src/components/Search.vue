<template>
  <div class="text-center">
    <div class="input-group justify-content-center">
      <span class="input-group-text bg-white-transparent rounded-pill rounded-pill-left text-dark border border-white border-1 border-end-0">
        <i class="bi bi-google"></i>
      </span>
      <input type="text" name="search" v-model="term" @keyup.enter="search" class="bg-white-transparent rounded-pill rounded-pill-right py-2 px-3 border border-white border-1 border-start-0 text-dark w-75 fs-5"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      term: '',
    };
  },
  methods: {
    search() {
      if (this.term) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(this.term)}`;
        window.open(url, "_blank");
        this.term = '';
      }
    },
  },
};
</script>

<style>
input[name="search"] {
  margin-left: 0!important;
}
</style>