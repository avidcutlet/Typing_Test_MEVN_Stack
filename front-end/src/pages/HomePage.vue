<template>
  <div class="flex flex-col justify-start items-center h-[91.34vh] bg-test-primary">
    <p class="uppercase tracking-widest mt-20 mb-4">Typing speed test</p>
    <p class="text-7xl font-bold mb-14">Test your typing skills</p>

    <!-- Typing information container -->
    <div class="flex flex-row flex-wrap items-center gap-10">
      <!-- 60 secondsd -->
      <div
        class="flex flex-col justify-center items-center h-28 h- w-28 rounded-full border-4 border-white"
      >
        <p class="text-4xl font-[900]">60</p>
        <p class="">seconds</p>
      </div>

      <!-- words/min -->
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center items-center h-16 w-16 bg-gray-100 rounded-md">
          <p class="text-4xl font-[900]">0</p>
        </div>
        <p>words/min</p>
      </div>

      <!-- chars/min -->
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center items-center h-16 w-16 bg-gray-100 rounded-md">
          <p class="text-4xl font-[900]">0</p>
        </div>
        <p>chars/min</p>
      </div>

      <!-- % accuracy -->
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center items-center h-16 w-16 bg-gray-100 rounded-md">
          <p class="text-4xl font-[900]">0</p>
        </div>
        <p>% accuracy</p>
      </div>
    </div>

    <div class="h-1/5 w-4/6 mt-24 bg-white"></div>
    
  </div>
</template>

<script setup>



</script>
