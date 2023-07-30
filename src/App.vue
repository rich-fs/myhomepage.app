<template>
  <div id="full-page-wrapper" :style="setBackgroundImage">

  <div class="content-wrapper">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>

</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useBackgroundStore } from '@/stores/background'
import axios from 'axios';

const store = useBackgroundStore();

const backgroundImageUrl = ref('');

// Function to change the background image URL
const changeBackgroundImage = (newUrl) => {
  backgroundImageUrl.value = newUrl;
};

// Computed property to get the background image URL
const computedBackgroundImageUrl = computed(() => backgroundImageUrl.value);

// Function to fetch data and update the background image URL
// Function to fetch data and update the background image URL
const fetchDataAndUpdateBackground = async () => {
  try {

    // Check if the data is already stored in the store for the current day
    const currentDate = new Date().toISOString().slice(0, 10); // Format: "YYYY-MM-DD"
    const storedData = localStorage.getItem('backgroundData');

    if (storedData) {
      const { date, imageUrl } = JSON.parse(storedData);

      if (date === currentDate) {
        // If the data is already available for the current day, use it
        backgroundImageUrl.value = imageUrl;
        return;
      }
    }

    const response = await axios.get('http://localhost:8080/bing-wallpaper');

    // Extract the image URL from the response data
    const imageUrl = `https://www.bing.com${response.data.url}`;
    
    // Update the backgroundImageUrl with the image URL
    backgroundImageUrl.value = imageUrl;

    store.setimageUrl(imageUrl);
    localStorage.setItem('backgroundData', JSON.stringify({ date: currentDate, imageUrl }));

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
    backgroundImage: `url('${computedBackgroundImageUrl.value}')`,
    backgroundPosition: 'center',
  };
});
</script>
