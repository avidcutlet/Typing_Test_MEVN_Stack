import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import words from '@/data/dictionary.json';

export const useDictionaryStore = defineStore('DictionaryStore', {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  state: () => {
    return {
      testChars: [],
    };
  },
  actions: {
    // Get 400 random words from dictionary
    getTestChars() {
      const wordCountPerTest = 10;
      const seperatePerWord = words[0].words.split(/\s+/);

      for (let i = 0; i < wordCountPerTest; i++) {
        // Generate random number
        const testNumber = Math.floor(Math.random() * 1000);

        // Adding random word from generated random number and space
        const currentWord = seperatePerWord[testNumber] + ' ';

        // Seperate words into characters
        const wordToChar = currentWord.split('');

        // Get length of array and push each character
        const wordToCharLength = wordToChar.length;
        for (let j = 0; j < wordToCharLength; j++) {
          this.testChars.push(wordToChar[j]);
        }
      }
    },
    shiftTestChars() {
      this.testChars.shift();
    },
  },
});
