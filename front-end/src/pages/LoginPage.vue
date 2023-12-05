<template>
  <div
    class="flex justify-center items-center min-h-[91.4vh] w-auto bg-no-repeat bg-cover bg-test-login text-white"
  >
    <div
      class="flex flex-col justify-center w-1/4 px-5 text-white h-[75vh] backdrop-blur-xl rounded-xl border-collapse"
    >
      <!-- Login Header -->
      <h2 class="justify-start text-2xl mt-16 mb-14 mx-auto">Login</h2>

      <!-- Email -->
      <label for="Email" class="my-1">Email</label>
      <input
        class="rounded-md placeholder-black bg-white bg-opacity-40 p-1.5 mb-4"
        placeholder="Type your email"
        type="email"
      />

      <!-- Password -->
      <label for="Password" class="mb-1">Password</label>

      <PasswordField />

      <!-- Login button -->
      <button
        class="my-3 text-black bg-test-display hover:bg-test-hover active:bg-test-active p-1.5 rounded-md"
      >
        Login
      </button>

      <!-- Remember Me Checkbox and Forgot Password -->
      <div class="flex justify-between text-xs">
        <div class="RememberMe">
          <input type="checkbox" name="RememberMe" id="RememberMe" class="align-middle" />
          <label for="RememberMe" class="mt-4">Remember Me</label>
        </div>

        <RouterLink
          to="/forgotPassword"
          class="hover:text-blue-500 hover:cursor-pointer hover:underline hover:underline-offset-4"
          >Forgot Password?
        </RouterLink>
      </div>

      <!-- Or Login with -->
      <div class="flex flex-col justify-center items-center mt-8">
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
              class="h-7 w-7 mt-[.20rem] hover:cursor-pointer"
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
      <p class="mx-auto mt-8 mb-3">
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
import { ref } from 'vue'

// components
import PasswordField from '@/components/PasswordField.vue'

// const alignmentRight = ref("fixed z-[1] right-[6%] my-1.5 h-5 w-6 hover:cursor-pointer");
</script>
