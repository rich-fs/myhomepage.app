<template>
  <div class="todo-list">
    <span
      class="badge rounded-4 border border-primary text-secondary bg-dark me-1"
      role="button"
      @click="toggleModal"
    >
      <i class="bi bi bi-list-task me-1" />
      Todo List
    </span>

    <div
      v-if="showModal"
      class="todo-modal rounded-4 border border-primary bg-dark"
    >
      <ul class="list-group list-group-mine mb-2">
        <li
          v-for="item in items"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ item.title }}
          <i class="bi bi-check-square" />
        </li>
      </ul>
      <div class="row g-3 mx-2">
        <div class="col-auto">
          <input
            v-model="newItemText"
            class="form-control form-control-sm"
            @keydown.enter="addItem"
          >
        </div>
        <div class="col-auto p-0">
          <i
            class="bi bi-plus-square-fill text-primary fs-5"
            @click="addItem"
          />
        </div>
      </div>
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
          const response = await axios.get(`${apiUrl}/todo`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          this.items = response.data;
        }
      } catch (error) {
        // console.error('Error fetching items:', error);
      }
    },
    async addItem() {
      try {
        if (token && this.newItemText.trim() !== '') {
          const response = await axios.post(`${apiUrl}/todo`, { title: this.newItemText }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            const newItem = {
              id: response.data.id,
              title: this.newItemText,
            };
            this.items.push(newItem);
            this.newItemText = '';
          } else {
            // console.error('Failed to add item:', response);
          }
        }
      } catch (error) {
        // console.error('Error adding items:', error);
      }
    },
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
    min-width: 20vw;
    padding: 10px;
    margin-left: 10px;
  }
</style>
