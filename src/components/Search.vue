<template>
  <div class="text-center">
    <div class="input-group justify-content-center">
      <span
        class="input-group-text
          bg-dark
          rounded-pill rounded-pill-left
          text-primary
          border border-primary border-1 border-end-0"
      >
        <i class="bi bi-search ms-2" />
      </span>
      <input
        v-model="term"
        type="text"
        name="search"
        class="bg-dark
          rounded-pill rounded-pill-right
          py-2 pe-3
          border border-primary border-1 border-start-0
          text-secondary w-75 fs-5"
        @keyup.enter="search"
      >
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
        window.open(url, '_blank');
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
