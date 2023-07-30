<template>
  <div id="full-page-wrapper" :style="someFunction">

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
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';

// const backgroundImageUrl = ref('https://www.bing.com/th?id=OHR.TigerIndia_EN-US1594590553_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp');
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
    const response = await axios.get('http://localhost:8080/bing-wallpaper');

    // Extract the image URL from the response data
    const imageUrl = `https://www.bing.com${response.data.url}`;
    
    // Update the backgroundImageUrl with the image URL
    backgroundImageUrl.value = imageUrl;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function to fetch data and update the background image URL on component mount
onMounted(() => {
  fetchDataAndUpdateBackground();
});

// Function to return the style object with the background image URL
const someFunction = computed(() => {
  return {
    backgroundImage: `url('${computedBackgroundImageUrl.value}')`,
    backgroundPosition: 'center',
  };
});
</script>
