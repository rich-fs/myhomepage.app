<template>
  <div class="todo-list">
    <span class="badge rounded-4 border border-white text-dark bg-white-transparent me-1">
      <i class="bi bi bi-list-task me-1"></i>
      Todo List
    </span>
  
    <div class="todo-modal rounded-4 border border-white bg-white-transparent">
      <ul class="list-group">
        <li v-for="item in items" :key="item.id" class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="" :id="slugify(item.title)">
          <label class="form-check-label" :for="slugify(item.title)">{{ item.title }}</label>
        </li>
      </ul>
      <input v-model="newItemText" />
      <button @click="addItem" class="btn btn-secondary btn-sm">Add Item</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      newItemText: ''
    };
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    slugify(title) {
      return title.toLowerCase().replace(/\s+/g, '-');
    },
    async fetchItems() {
      try {
        const token = localStorage.getItem('token'); // Get the JWT token from local storage
        if (token) {
          const response = await axios.get('http://localhost:3030/todo', {
            headers: {
              Authorization: `Bearer ${token}` // Attach the JWT token to the request
            }
          });

          this.items = response.data; // Update the items array with the fetched data
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
  },
};
</script>

<style>
  .todo-list {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px; 
  }

  .todo-modal {
    position: absolute;
    top: 100%; 
    left: 0;
    width: 400px; 
    padding: 10px;
    margin-right: 10px;
  }
</style>