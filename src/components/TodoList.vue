<template>
  <div class="todo-list">
    <span class="badge rounded-4 border border-white text-dark bg-white-transparent me-1" @click="toggleModal" role="button">
      <i class="bi bi bi-list-task me-1"></i>
      Todo List
    </span>
  
    <div v-if="showModal" class="todo-modal rounded-4 border border-white bg-white-transparent">
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
const apiUrl = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

export default {
  data() {
    return {
      showModal: false,
      items: [],
      newItemText: '',
    };
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    slugify(title) {
      return title.toLowerCase().replace(/\s+/g, '-');
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    async fetchItems() {
      try {
        if (token) {
          const response = await axios.get(apiUrl + '/todo', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          this.items = response.data;
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async addItem() {
      try {
        if (token && this.newItemText.trim() !== '') {
          const response = await axios.post(apiUrl + '/todo', { title: this.newItemText }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.status === 200) {
            const newItem = {
              id: response.data.id,
              title: this.newItemText
            };
            this.items.push(newItem);
            this.newItemText = '';
          } else {
            console.error('Failed to add item:', response);
          }
        }
      } catch (error) {
        console.error('Error adding items:', error);
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
    margin-left: 10px;
  }
</style>