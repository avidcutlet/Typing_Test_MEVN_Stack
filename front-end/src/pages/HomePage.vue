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
    <div class="flex h-1/5 w-4/6 mt-24 bg-white outline-none" ref="inputDiv" tabindex="0">
      <div
        class="flex justify-end w-1/2 my-auto text-right text-5xl truncate text-clip border-2 border-cyan-300"
      >
        <!-- Typed word -->
        <span v-for="(word, key) in spanWords" :key="key">
          <span :class="unmatchedIndexes.includes(key) ? 'line-through' : ''">{{ word }}</span>
          <!-- For spaces -->
          <span>&nbsp;</span>
        </span>

        <!-- For typed -->
        <span :class="matchedKey ? '' : 'line-through'">{{ typed }}</span>
      </div>
      <div class="w-1/2 self-center text-5xl truncate text-clip" ref="testDiv">
        <span v-for="char in dictionaryStore.testChars">
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

// function typedSpanClass() {
//   return ;
// }

// Array for span words
const spanWords = ref([]);
// Array for span space
const spaces = ref([]);

// Counter for unmatched key
const index = ref(0);
// Storage for unmatched key
const unmatchedIndexes = ref([]);
// Push unmatched key
// @Params key = index that will be pushed when unmatchedKey is truthy
const pushUnmatchedIndexes = (i) => {
  unmatchedIndexes.value.push(i);
};

// First child div key event handling
const typed = ref('');

// Toggle strikethrough class if typed is unmatched
const matchedKey = ref(true);

//*********************************//
//**** TYPE KEY EVENT FUNCTION ****//
//*********************************//

// Get key event and assign to typed
const typedKeyEvent = (event) => {
  // Current user's key press typed
  const currentKey = ref(event.key);

  // ****************************************
  // Validation Function
  const popTyped = () => (typed.value = typed.value.slice(0, -1));
  const pushTyped = () => (typed.value += currentKey.value);

  if (currentKey.value === 'Backspace') {
    // try catch outofbounds exception
    if (matchedKey.value) {
      // Checks if typed is empty
      // if empty proceed to flow
      // else do nothing
      if (typed.value.length > 0) {
        popTyped();

        // unshift character from tempChars to testChars
        dictionaryStore.restoreTestChars();
      }
    } else {
      popTyped();

      if (typed.value.split('').length === dictionaryStore.tempChars.length)
        matchedKey.value = true;
    }

    // keypressed is neither character, number, nor special character
  } else if (currentKey.value.length > 1) {
    //do nothing
  } else if (currentKey.value === ' ' && matchedKey.value) {
    // new word will be executed

    // INSERT LOGIC HERE FOR
    // currentKey.value !== dictionaryStore.testChars[0]
    // matchedKey.value = false
    if (dictionaryStore.testChars[0] !== ' ') {
      matchedKey.value = false;
      // Push unmatched key to unmatchedIndexes
      pushUnmatchedIndexes(index.value);

      dictionaryStore.shiftTestCharsTillSpace();
    } else {
      dictionaryStore.shiftTestChars();
    }

    createNewSpan();
    dictionaryStore.emptyTempChars();
    index.value++;

    // add words when
    if (dictionaryStore.testChars.length < 35) dictionaryStore.getTestChars();

  } else if (currentKey.value === ' ' && !matchedKey.value) {
    createNewSpan();
    dictionaryStore.emptyTempChars();

    // Push unmatched key to unmatchedIndexes
    pushUnmatchedIndexes(index.value);
    index.value++;

    dictionaryStore.shiftTestCharsTillSpace();
  } else if (currentKey.value === dictionaryStore.testChars[0] && matchedKey.value) {
    // if typed key matched in dictionary

    // push first index of  testChar to tempChars
    dictionaryStore.backupToTempChars();

    // shift testChar
    dictionaryStore.shiftTestChars();

    // push Key to typed
    pushTyped();
  } else {
    matchedKey.value = false;

    // push key to typed
    pushTyped();
  }

  // ***********************
  // Create new span

  function createNewSpan() {
    // Get typed keys as word
    const newSpan = typed.value;

    // Add words as span
    spanWords.value.push(newSpan);

    // Add space as span
    spaces.value.push(' ');

    // Empty temp storage
    typed.value = '';

    // Reset matchedKey to true
    matchedKey.value = true;
  }
};

// Add Keyup event listener after dom loaded
const inputDiv = ref(null);
onMounted(() => {
  inputDiv.value.addEventListener('keyup', typedKeyEvent);
});
</script>
