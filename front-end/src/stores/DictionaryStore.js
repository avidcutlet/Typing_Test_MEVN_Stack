import { defineStore } from 'pinia';

import words from '@/data/dictionary.json';

export const useDictionaryStore = defineStore('DictionaryStore', {
  state: () => {
    return {
      testChars: [],
      tempChars: [],
      seperatePerWord: words[0].words.split(/\s+/g),
    };
  },
  actions: {
    // Get 400 random words from dictionary
    getTestChars() {
      const wordCountPerTest = 10;

      for (let i = 0; i < wordCountPerTest; i++) {
        // Generate random number
        const testNumber = Math.floor(Math.random() * 1000);

        // Adding random word from generated random number and space
        const currentWord = this.seperatePerWord[testNumber] + ' ';

        // Seperate words into characters
        const wordToChar = currentWord.split('');

        // Get length of array and push each character
        const wordToCharLength = wordToChar.length;
        for (let j = 0; j < wordToCharLength; j++) {
          this.testChars.push(wordToChar[j]);
        }
      }
    },
    // Add first index of testChars array
    backupToTempChars() {
      this.tempChars.push(this.testChars[0]);
    },
    // Remove first index of testChars
    shiftTestChars() {
      this.testChars.shift();
    },
    // Remove chars until space
    shiftTestCharsTillSpace() {
      let completeWordLoc = 0;

      for (const [i, element] of this.testChars.entries()) {
        if (element === ' ') {
          completeWordLoc = i + 1;
          break;
        }
      }

      for (let i = 0; i < completeWordLoc; i++) {
        this.testChars.shift();
      }
    },

    // Move last index of tempChars to testChars
    restoreTestChars() {
      // Get length of tempChars
      const lastIndexOfTempChars = this.tempChars.length;

      // Move last index of tempChars to first index of testChars
      this.testChars.unshift(this.tempChars[lastIndexOfTempChars - 1]);

      // Remove last index of tempChars
      this.tempChars.pop();
    },

    emptyTempChars() {
      this.tempChars = [];
    },
  },
});
