<template>
  <div class="flex flex-col min-h-screen font-Nunito">
    <!-- <Navbar v-if="showNavbar"/> -->
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, onBeforeRouteUpdate, } from 'vue-router';
import { ref, } from 'vue';
import Navbar from '@/components/Navbar.vue';

// const showNavbar = ref(true);

// onBeforeRouteUpdate((to, from, next) => {
//   showNavbar.value = to.name !== 'login';

//   next();
// });
</script>