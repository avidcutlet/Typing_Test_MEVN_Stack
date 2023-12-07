import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import words from '@/data/words.json';

export const useWordStore = defineStore('WordStore', {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  state: () => {
    return {
      words,
    };
  },
});
