<template>
  <header class="relative z-10 top-0 bg-test-secondary shadow-lg">
    <nav class="flex text-black">

      <!-- Typing Test Header -->
      <router-link to="/">
        <button class="flex px-12 py-3">
          <img
            class="max-h-8"
            src="../assets/icons/logo/icons8-keyboard-48.png"
            alt="login"
            srcset="
              ../assets/icons/logo/icons8-keyboard-48.png 1x,
              ../assets/icons/logo/icons8-keyboard-64.png 2x
            "
          />
          <p class="py-2 pl-3 text-sm">Typing Test</p>
        </button>
      </router-link>

      <!-- Login button -->
      <router-link to="/login" class="ml-auto">
        <button class="flex p-3 hover:bg-test-hover active:bg-test-active">
          <img
            class="max-h-6 mt-1.5"
            src="../assets/icons/login/icons8-login-48.png"
            alt="login"
            srcset="
              ../assets/icons/login/icons8-login-48.png 1x,
              ../assets/icons/login/icons8-login-64.png 2x
            "
          />
          
          <p class="py-2 pl-3 text-sm">Login</p>
        </button>
      </router-link>

      <!-- Registration button -->
      <router-link to="/registration">
        <button class="flex p-3 hover:bg-test-hover active:bg-test-active">
          <img
          class="max-h-6 mt-1.5"
          src="../assets/icons/signup/icons8-sign-up-48.png"
          alt="login"
          srcset="
          ../assets/icons/signup/icons8-sign-up-48.png 1x,
          ../assets/icons/signup/icons8-sign-up-64.png 2x
          "
          />
          <p class="py-2 pl-3 text-sm">Register</p>
        </button>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>