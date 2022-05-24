/* eslint-disable */
import { reactive } from 'vue';

export const store = reactive({
  isMobileMenuVisible: true,
  currentLang: localStorage.getItem('lang') || 'en',
});
