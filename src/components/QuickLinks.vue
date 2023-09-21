<template>
  <div class="quick-links">
    <span class="badge rounded-4 border border-primary text-secondary bg-dark me-1">
      <i class="bi bi-github me-1" />
      <a
        href="https://github.com/rich-fs/myhomepage.app"
        title="MyHomepage App"
        target="_blank"
        class="text-secondary text-decoration-none"
      >App</a>
    </span>

    <span class="badge rounded-4 border border-primary text-secondary bg-dark">
      <i class="bi bi-github me-1" />
      <a
        href="https://github.com/rich-fs/myhomepage.api"
        title="MyHomepage App"
        target="_blank"
        class="text-secondary text-decoration-none"
      >API</a>
    </span>

    <nav class="d-none">
      <RouterLink
        to="/"
        :class="'text-secondary'"
      >
        Home
      </RouterLink>&nbsp;
      <RouterLink
        to="/about"
        :class="'text-secondary'"
      >
        About
      </RouterLink>
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
