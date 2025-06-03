<script setup>
import NavBar from './components/NavBar.vue'
import footer from './components/footer.vue'
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <footer />
  </div>
</template>

<style>
  body{
    background-image: url('./components/images/6.JPG');
  }

</style>