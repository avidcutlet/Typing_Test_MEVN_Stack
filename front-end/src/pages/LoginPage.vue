<template>
  <div
    class="flex justify-center items-center min-h-[91.3vh] w-auto bg-no-repeat bg-cover bg-test-login"
  >
    <div
      class="flex flex-col justify-center w-1/4 px-5 text-white h-[75vh] backdrop-blur-xl rounded-xl border-collapse"
    >
      <!-- Login Header -->
      <span class="mt-10"></span>
      <h2 class="justify-start text-2xl mx-auto">Login</h2>
      <span class="mb-12"></span>

      <!-- Email -->
      <span class="mt-1"></span>
      <label for="Email">Email</label>
      <span class="mb-1"></span>
      <input
        class="rounded-md text-black placeholder-black bg-white bg-opacity-40 p-1.5"
        placeholder="Type your email"
        type="email"
      />
      <span class="mb-6"></span>

      <!-- Password -->
      <label for="Password">Password</label>
      <span class="mb-1"></span>

      <PasswordField />

      <!-- Login button -->
      <span class="mt-3"></span>
      <button
        class="text-black bg-test-btn-display hover:bg-test-hover active:bg-test-active p-1.5 rounded-md"
      >
        Login
      </button>
      <span class="mb-3"></span>

      <!-- Remember Me Checkbox and Forgot Password -->
      <span class="mt-3"></span>
      <div class="flex justify-between text-xs">
        <div class="RememberMe">
          <input type="checkbox" name="RememberMe" id="RememberMe" class="align-middle" />
          <label for="RememberMe" class="mt-4">Remember Me</label>
        </div>

        <RouterLink
          to="/forgotPassword"
          class="hover:text-blue-500 hover:cursor-pointer hover:underline hover:underline-offset-4"
          >Forgot Password?</RouterLink
        >
      </div>

      <!-- Or Login with -->
      <span class="mt-7"></span>
      <div class="flex flex-col justify-center items-center">
        <small>— Or login with —</small>
        <span class="mb-2"></span>

        <div class="flex">
          <img
            class="h-8 w-8 hover:cursor-pointer"
            src="../assets/icons/facebook/icons8-facebook-48.png"
            alt="facebook icon"
            srcset="
              ../assets/icons/facebook/icons8-facebook-48.png 1x,
              ../assets/icons/facebook/icons8-facebook-64.png 2x
            "
          />

          <span class="mx-2"></span>

          <span class="my-auto">
            <img
              class="h-7 w-7 hover:cursor-pointer"
              src="../assets/icons/google/icons8-google-48.png"
              alt="google icon"
              srcset="
                ../assets/icons/google/icons8-google-48.png 1x,
                ../assets/icons/google/icons8-google-64.png 2x
              "
            />
          </span>
        </div>
      </div>

      <!-- Don't have account yet? Register here -->
      <span class="mt-8"></span>
      <p class="mx-auto">
        Don't have an account yet?
        <router-link
          to="/registration"
          class="hover:text-blue-500 hover:cursor-pointer hover:underline hover:underline-offset-4"
          >Register here</router-link
        >
      </p>
      <span class="mb-10"></span>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import PasswordField from '@/components/PasswordField.vue'
</script>
