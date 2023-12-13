<template>
  <!-- Background -->
  <div class="flex justify-center items-center min-h-[91.4vh] w-auto bg-test-login bg-cover">
    <!-- Blur -->
    <div class="relative z-0 h-[91.4vh] w-screen backdrop-blur-md"></div>

    <!-- Card container -->
    <div class="fixed z-[1] h-[30rem] w-[50rem] mt-3 bg-test-login bg-cover">
      <!-- Container image -->
      <div class="flex flex-col justify-center items-center h-[30rem] w-[26rem] bg-test-primary">
        <ForgotPassword />
      </div>
    </div>
  </div>
</template>

<script setup>
import ForgotPassword from '@/components/ForgotPassword.vue'
</script>
