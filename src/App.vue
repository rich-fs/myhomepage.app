<template>
  <div id="full-page-wrapper" :style="someFunction">
    <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</div>

</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const backgroundImageUrl = ref('https://www.bing.com//th?id=OHR.TigerIndia_EN-US1594590553_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp');

// Function to change the background image URL
const changeBackgroundImage = (newUrl) => {
  backgroundImageUrl.value = newUrl;
};

// Computed property to get the background image URL
const computedBackgroundImageUrl = computed(() => backgroundImageUrl.value);

// Function to return the style object with the background image URL
const someFunction = computed(() => {
  return {
    backgroundImage: `url('${computedBackgroundImageUrl.value}')`,
    backgroundPosition: 'center',
  };
});
</script>
