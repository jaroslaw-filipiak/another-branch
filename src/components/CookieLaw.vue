<template>
<div class="container-fluid cookie-law-banner" v-if="!cookie">
  <div class="container">
    <div class="row">
      <div class="cookie-law-banner--content">
        <p>Ta strona wykorzystuje pliki cookies zainstalowane przez Online Advertising Network lub podmioty trzecie do celów statystycznych, marketingowych oraz analitycznych, umożliwiając świadczenie Państwu spersonalizowanych usług reklamowych na odwiedzanych stronach. Informacje te są udostępniane serwisom społecznościowym, reklamodawcom, analitykom i innym dostawcom usług - stronom trzecim. W każdym czasie możesz zmienić ustawienia plików cookies za pomocą ustawień przeglądarki – ustawienia prywatności. W przeciwnym razie zaakceptuj nasze zalecane ustawienia plików cookies. Więcej informacji dotyczących wykorzystania plików cookies znajdziecie Państwo w naszej <router-link to="/privacy-policy"> Polityce Prywatności</router-link></p>
        <button @click="acceptCookies" class="oan-btn">Akceptuje</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useCookies } from 'vue3-cookies';

export default {
  name: 'CookieLaw',
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      cookie: this.cookies.get('OANcookiesAccepted'),
    };
  },
  methods: {
    acceptCookies() {
      this.cookies.set('OANcookiesAccepted', 'true', '1y');
      this.cookie = true;
    },
  },
  mounted() {
    console.log(this.cookie);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.cookie-law-banner {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px;
  background: $blue,;
  z-index: 10;

  @include lg {
    padding: 15px;
  }

  p {
    font-size: 11px;
    color: #fff;

    @include lg {
      margin-bottom: 0px;
      padding-right: 30px;
    }

  }

  a {
    color: $yellow;
    &:hover {
      opacity: .8;
    }
  }

  &--content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include lg {
      flex-direction: row;
      justify-content: center;
    }
  }
}

</style>
