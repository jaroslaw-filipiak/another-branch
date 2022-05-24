<template>
  <div>
    <a :class="{'is-active': store.currentLang == 'en'}" @click.prevent="handleChange('en')" href="#">en | </a>
    <a :class="{'is-active': store.currentLang == 'pl'}" @click.prevent="handleChange('pl')" href="#">pl</a>
  </div>

</template>

<script>
import { store } from '@/store';

export default {
  name: 'LangSwitcher',
  data() {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      lang,
      store,
    };
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

a.is-active {
  color: $accent;
}



</style>
