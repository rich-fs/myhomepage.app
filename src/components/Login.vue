<template>
  <div class="login-links">
    <span class="badge rounded-4 border border-white text-white bg-white-transparent" @click="toggleModal" role="button">
      <i class="bi bi-door-open"></i>
      Login
    </span>

    <nav class="d-none">
      <RouterLink to="/" :class="'text-white'">Home</RouterLink>&nbsp;
      <RouterLink to="/about" :class="'text-white'">About</RouterLink>
    </nav>

    <div v-if="showModal" class="login-modal rounded-4 border border-white bg-white-transparent">
      <div class="modal-content text-white">
        <p>This is a simple modal that appears below the span.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
  .login-links {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px; 
  }
  
  .login-modal {
    position: absolute;
    top: 100%; 
    right: 0;
    width: 200px; 
    padding: 10px;
    margin-right: 10px;
  }

  .modal-content {
    
  }
</style>