<template>
  <!-- Background -->
  <div class="flex justify-center items-center min-h-[91.4vh] w-auto bg-test-login bg-cover">
    <!-- Blur -->
    <div class="relative z-0 h-[91.4vh] w-screen backdrop-blur-md"></div>

    <!-- Card container -->
    <div class="fixed z-[1] h-[30rem] w-[50rem] mt-3 bg-test-login bg-cover">
      <!-- Container image -->
      <div class="flex flex-col h-[30rem] w-[26rem] bg-test-primary">
        <h2 class="text-5xl mt-auto pl-9">Reset your password?</h2>
        <p class="mt-4 mb-8 px-9">No worries! Just enter your email and we'll send your reset.</p>

        <div class="mx-20 my-3">
          <label for="typePassword">Type Password:</label>
          <PasswordField />
        </div>

        <div class="mx-20">
          <label for="retypePassword">Retype Password:</label>
          <PasswordField />
        </div>

        <input
          class="self-center w-64 mt-5 mb-auto py-1.5 px-3 rounded-md text-white bg-test-display outline-none hover:cursor-pointer hover:bg-test-hover active:bg-test-active"
          type="button"
          value="Reset Password"
        />

        <router-link to="/login" class="ml-9 mb-auto">
          <p class="text-blue-600 hover:cursor-pointer">Back to login</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// import component
import PasswordField from '@/components/PasswordField.vue'
</script>
