<template>
  <div class="min-h-[91.4vh] w-auto bg-no-repeat bg-cover bg-test-pagenotfound">
    <div
      class="flex flex-col justify-center items-center h-[91.4vh] w-auto bg-white/5 backdrop-brightness-50"
    >
      <h2 class="text-[20rem] tracking-wide text-white text-opacity-30">404</h2>
      <p class="relative -inset-y-64 text-white text-opacity-80 text-4xl">Page not Found</p>
    </div>

    <!-- Navigation row -->
    <div class="flex flex-col justify-center items-center h-[30rem] bg-test-secondary">
      <h4 class="my-auto text-4xl font-medium text-test-display uppercase scale-x-[.6] tracking-[.4em]">
        Let us help you find your way back
      </h4>
      <div class="flex justify-center m-5 h-52">
        <router-link
          to="/"
          class="flex flex-col items-center border-2 border-black rounded-md mx-6 w-60 px-5"
        >
          <p class="mt-5 uppercase text-test-display font-extrabold tracking-wider">Cart</p>
          <p class="mt-5 text-justify">
            This is a short cart details to look like there's something useful typed in here.
          </p>
        </router-link>
        <router-link
          to="/"
          class="flex flex-col items-center border-2 border-black rounded-md mx-6 w-60 px-5"
        >
          <p class="mt-5 uppercase text-test-display font-semibold tracking-wider">Cart</p>
          <p class="mt-5 text-justify">
            This is a short cart details to look like there's something useful typed in here.
          </p>
        </router-link>
        <router-link
          to="/"
          class="flex flex-col items-center border-2 border-black rounded-md mx-6 w-60 px-5"
        >
          <p class="mt-5 uppercase text-test-display font-semibold tracking-wider">Cart</p>
          <p class="mt-5 text-justify">
            This is a short cart details to look like there's something useful typed in here.
          </p>
        </router-link>
        <router-link
          to="/"
          class="flex flex-col items-center border-2 border-black rounded-md mx-6 w-60 px-5"
        >
          <p class="mt-5 uppercase text-test-display font-semibold tracking-wider">Cart</p>
          <p class="mt-5 text-justify">
            This is a short cart details to look like there's something useful typed in here.
          </p>
        </router-link>
      </div>
      <div class="flex justify-center my-auto">
        <img class="mx-4 hover:cursor-pointer" src="../assets/icons/twitter/icons8-twitter-circled-48.png" alt="twitter" />
        <img class="mx-4 hover:cursor-pointer" src="../assets/icons/instagram/icons8-instagram-48.png" alt="instagram" />
        <img class="mx-4 hover:cursor-pointer" src="../assets/icons/facebook/icons8-facebook-48.png" alt="facebook" />
        <img class="mx-4 hover:cursor-pointer" src="../assets/icons/linkedin/icons8-linkedin-48.png" alt="linkedin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
