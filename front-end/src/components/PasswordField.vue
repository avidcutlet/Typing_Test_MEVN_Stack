<template>
  <div class="flex">
    <div>
      <!-- Type your password -->
      <input
        class="inline z-[0] rounded-md text-black placeholder-black bg-white bg-opacity-40 p-1.5 w-[21.5rem]"
        placeholder="Type your password"
        :type="inputType"
      />
    </div>

    <div class="mt-1.5">
      <!-- Show Password -->
      <img
        class="fixed z-[1] right-6 h-6 w-7 hover:cursor-pointer"
        src="../assets/icons/password/icons8-password-48.png"
        alt="Lock"
        @click="togglePasswordVisibility"
        v-if="passwordVisibility"
      />

      <!-- Hide Password -->
      <img
      class="fixed z-[1] right-6 h-6 w-7 hover:cursor-pointer"
      src="../assets/icons/password/icons8-unlock-48.png"
      alt="Lock"
      @click="togglePasswordVisibility"
      v-else
    />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const passwordVisibility = ref(false)
const inputType = ref('text')

function togglePasswordVisibility() {
  passwordVisibility.value = !passwordVisibility.value
  inputType.value === 'password' ? (inputType.value = 'text') : (inputType.value = 'password')
}
</script>
