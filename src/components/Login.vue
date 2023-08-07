<template>
  <div class="login-links">
    <span v-if="!isLoggedIn" class="badge rounded-4 border border-white bg-white-transparent text-dark" @click="toggleModal" role="button">
      <i class="bi bi-door-open"></i>
      Login
    </span>
    <span v-else class="badge rounded-4 border border-white bg-white-transparent text-dark" @click="logout" role="button">
      <i class="bi bi-door-closed"></i>
      Logout
    </span>

    <nav class="d-none">
      <RouterLink to="/" :class="'text-white'">Home</RouterLink>&nbsp;
      <RouterLink to="/about" :class="'text-white'">About</RouterLink>
    </nav>

    <div v-if="showModal" class="login-modal rounded-4 border border-white bg-white-transparent">
      <div class="modal-content">
        <form @submit.prevent="login">
          <div class="mb-1">
            <label for="email" class="form-label mb-0">Email</label>
            <input v-model="email" type="email" class="form-control form-control-sm" id="email">
          </div>
          <div class="mb-1">
            <label for="password" class="form-label mb-0">Password</label>
            <input v-model="password" type="password" class="form-control form-control-sm" id="password">
          </div>
          <div class="mb-1">
            <span v-if="showError" class="text-drk">{{errorMessage}}</span>
          </div>
          <button type="submit" class="btn btn-secondary btn-sm">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';
export default {
  data() {
    return {
      loggedIn: false,
      showModal: false,
      showError: false,
      errorMessage: '',
      email: '',
      password: '',
    };
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn;
    },
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    logout() {
      localStorage.removeItem('token');
      this.reset();
    },
    reset() {
      this.loggedIn = false;
      this.showModal = false;
      this.showError = false;
      this.errorMessage = '';
      this.email = '';
      this.password = '';
    },
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post('http://localhost:3030/auth/login', credentials, {
          validateStatus: function (status) {
            // Resolve the promise for any status code below 500
            return status >= 200 && status < 500;
          },
        });

        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          this.toggleModal();
          this.loggedIn = true;
        } else {
          this.showError = true;
          this.errorMessage = 'Login failed: ' + response.data.message;
        }
      } catch (error) {
        this.showError = true;
        this.errorMessage = 'Login failed: Network error';
      }
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    // const decodedToken = jwt_decode(token);
    //       console.log(decodedToken);
    this.loggedIn = !!token;
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
</style>