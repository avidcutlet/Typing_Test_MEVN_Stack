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

    <!-- Typing test words -->
    <!-- @keyup="typedKeyEvent" -->
    <div class="flex h-1/5 w-4/6 mt-24 bg-white outline-none" ref="inputDiv" tabindex="0">
      <div
        class="flex justify-end w-1/2 my-auto text-right text-5xl truncate text-clip border-2 border-cyan-300"
      >
        <span v-html="typed"></span>
      </div>
      <div class="w-1/2 self-center text-5xl truncate text-clip" ref="testDiv">
        <span v-for="(char, i) in dictionaryStore.testChars" :key="i">
          {{ char === ' ' ? '&nbsp;' : char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDictionaryStore } from '@/stores/DictionaryStore';
import { onMounted, ref } from 'vue';

// Dictionary
const dictionaryStore = useDictionaryStore();
dictionaryStore.getTestChars();

// First child div key event handling
const typed = ref('');

// Get key event and assign to typed
const typedKeyEvent = (event) => {
  const currentKey = event.key;

  // Replace ' ' with &nbsp; to be displayed in HTML
  currentKey === ' ' ? typed.value += '&nbsp;' : 

    // Test if Backspace
    currentKey === "Backspace" ? typed.value.slice(0, -1) :

    // Test if word
    // Test F1 - F12 Keys, if true do nothing
    // else add typed key
    currentKey.length > 1 ? typed : typed.value += currentKey ;
    
   

  if (currentKey === dictionaryStore.testChars[0]) {
    console.log(
      `Current key: ${currentKey}, dictionaryStore.testChars[0]: ${dictionaryStore.testChars[0]} `,
    );

    dictionaryStore.shiftTestChars();

    // Get testDiv div
    const testDiv = ref(null);
    const getTestDiv = testDiv.value;

    if (getTestDiv && getTestDiv.childNodes.length > 0) {
      getTestDiv.removeChild(getTestDiv.childNodes[0]);
    }
  } else {
    console.log(
      `Current key: ${currentKey}, dictionaryStore.testChars[0]: ${dictionaryStore.testChars[0]} `,
    );
  }
};

// Add Keyup event listener after dom loaded
const inputDiv = ref(null);
onMounted(() => {
  inputDiv.value.addEventListener('keyup', typedKeyEvent);
});
</script>
