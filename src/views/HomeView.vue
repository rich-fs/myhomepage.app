<script setup>
import DateTime from '../components/DateTime.vue'
</script>

<template>
  <div class="home">
    <DateTime></DateTime>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
