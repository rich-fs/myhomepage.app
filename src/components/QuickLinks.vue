<template>
  <div class="quick-links">
    <span class="badge rounded-4 border border-white text-white bg-white-transparent me-1">
      <i class="bi bi-github"></i>
      <a href="https://github.com/rich-fs/myhomepage.app" title="MyHomepage App" target="_blank" class="text-white text-decoration-none">App</a>
    </span>

    <span class="badge rounded-4 border border-white text-white bg-white-transparent">
      <i class="bi bi-github"></i>
      <a href="https://github.com/rich-fs/myhomepage.api" title="MyHomepage App" target="_blank" class="text-white text-decoration-none">API</a>
    </span>

    <nav class="d-none">
      <RouterLink to="/" :class="'text-white'">Home</RouterLink>&nbsp;
      <RouterLink to="/about" :class="'text-white'">About</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {

  },
};
</script>

<style>
  .quick-links {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 10px; 
  }
</style>