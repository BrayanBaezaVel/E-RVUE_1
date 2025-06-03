<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style>
  body{
    background-image: url('./components/images/6.JPG');
  }

</style>