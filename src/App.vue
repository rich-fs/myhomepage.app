<template>
  <div id="full-page-wrapper" :style="setBackgroundImage">
    <div class="content-wrapper">
      <Login></Login>
      <QuickLinks></QuickLinks>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Login from './components/Login.vue'
import QuickLinks from './components/QuickLinks.vue'
import axios from 'axios';

const backgroundImageUrl = ref('');

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
    const response = await axios.get('http://localhost:3030/bing-wallpaper');
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
</script>