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
        <form>
          <div class="mb-1">
            <label for="username" class="form-label mb-0">Username</label>
            <input type="email" class="form-control form-control-sm" id="username">
          </div>
          <div class="mb-1">
            <label for="password" class="form-label mb-0">Password</label>
            <input type="password" class="form-control form-control-sm" id="password">
          </div>
          <div class="mb-1 form-check">
            <input type="checkbox" class="form-check-input" id="remember">
            <label class="form-check-label" for="remember">Remember Me</label>
          </div>
          <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
        </form>
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