<template>
  <div class="flex flex-col">
    <h2 class="text-5xl self-start mt-auto pl-9">Forgot your password?</h2>
    <p class="flex-start mt-4 mb-20 px-9">
      No worries! Just enter your email and we'll send your reset.
    </p>

    <div class="mx-14">
      <input class="mb-10 p-1.5 w-full bg-white bg-opacity-0 border-b-2 border-b-black outline-none text-black placeholder:text-black hover:cursor-pointer" type="email" name="emailReset" id="emailReset" placeholder="Type your email" />
    </div>

    <router-link
      to="/resetPassword"
      class="w-64 mb-auto mx-auto py-1.5 px-3 rounded-md text-white text-center bg-test-display outline-none hover:cursor-pointer hover:bg-test-hover active:bg-test-active"
    >
      <input type="button" value="Send Request" />
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
