<template>
  <div class="flex justify-center bg-white bg-opacity-40 rounded-md">
    <!-- Type your password -->
    <input
      class="text-black placeholder-black bg-white bg-opacity-0 outline-none p-1.5 w-full"
      placeholder="Type your password"
      :type="inputType"
    />

    <!-- Show Password -->
    <img
      class="my-2 h-5 w-6 hover:cursor-pointer"
      src="../assets/icons/password/icons8-password-48.png"
      alt="Lock"
      @click="togglePasswordVisibility"
      v-if="passwordVisibility"
    />

    <!-- Hide Password -->
    <img
      class="my-2 h-5 w-6 hover:cursor-pointer"
      src="../assets/icons/password/icons8-unlock-48.png"
      alt="Lock"
      @click="togglePasswordVisibility"
      v-else
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const passwordVisibility = ref(true);
const inputType = ref('password');

function togglePasswordVisibility() {
  passwordVisibility.value = !passwordVisibility.value;
  inputType.value === 'password' ? (inputType.value = 'text') : (inputType.value = 'password');
}
</script>
