import { defineStore } from 'ui.vue3.pinia';

export const dataStore = defineStore('data', {
  state: () => ({
    id: `id${Math.floor(Math.random() * 1000)}`,
    data: {},
    lang: {},
    actions: []
  }),
});
