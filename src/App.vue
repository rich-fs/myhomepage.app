<template>
  <div id="full-page-wrapper" :style="setBackgroundImage">
    <div class="content-wrapper">
      <Login></Login>
      <QuickLinks></QuickLinks>
      <TodoList v-if="loggedInStatus"></TodoList>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import axios from 'axios';

import Login from './components/Login.vue'
import QuickLinks from './components/QuickLinks.vue'
import TodoList from './components/TodoList.vue'
import useAuthStore from './stores/auth';

const backgroundImageUrl = ref('');

console.log(import.meta.env);
// Function to fetch data and update the background image URL
const fetchDataAndUpdateBackground = async () => {
  try {
    const currentDate = new Date().toISOString().slice(0, 10); // Format: "YYYY-MM-DD"

    // Check if the image URL is available in local storage
    const cachedImageUrl = localStorage.getItem('backgroundImageUrl');
    const cachedDate = localStorage.getItem('storedDate');

    if (cachedImageUrl && cachedDate === currentDate) {
      // If the image URL is available for the current day, use it from local storage
      backgroundImageUrl.value = cachedImageUrl;
      return;
    }

    // Fetch data from the backend
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(apiUrl + '/bing-wallpaper');
    const imageUrl = `https://www.bing.com${response.data.url}`;

    // Update the backgroundImageUrl with the fetched image URL
    backgroundImageUrl.value = imageUrl;

    // Store the data in local storage for the current day
    localStorage.setItem('backgroundImageUrl', imageUrl);
    localStorage.setItem('storedDate', currentDate);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function to fetch data and update the background image URL on component mount
onMounted(() => {
  fetchDataAndUpdateBackground();
});

// Function to return the style object with the background image URL
const setBackgroundImage = computed(() => {
  return {
    backgroundImage: `url('${backgroundImageUrl.value}')`,
  };
});

const loggedInStatus = computed(() => {
  return useAuthStore().loggedIn;
});
</script>