<template>
<footer>
  <div class="container-fluid footer">
    <div class="container11">
      <div class="row">

        <div class="d-flex flex-column flex-wrap flex-xl-row align-items-center justify-content-center">

          <div class="d-flex align-items-center justify-content-start  p-0 footer-col footer-col-1">
            <strong><span style="padding-right: 3px">oan</span> </strong> part of <img src="@/assets/img/cloud-technologies-footer-logo.png" alt="">
          </div>

          <div class="footer--menu pt-3 pt-lg-0 text-center text-lg-start  p-0 footer-col footer-col-2">
            <router-link :to="{ name: 'home'}">Oferta /  </router-link>
            <router-link :to="{ name: 'about'}">O nas /  </router-link>
            <router-link :to="{ name: 'contact'}">Kontakt /  </router-link>
            <router-link :to="{ name: 'privacyPolicy'}">Polityka prywatności /  </router-link>
            <router-link :to="{ name: 'gdpr'}">RODO /  </router-link>
            <router-link :to="{ name: 'advertisingPrivacyPolicy'}">Polityka prywatności usług reklamowych</router-link>
          </div>

          <div class="d-flex justify-content-center pt-3   footer-col footer-col-3 ps-1 pe-1">
            <a class="social-link fb" target="_blank" href="https://www.facebook.com/OnlineAdvertisingNetwork/?ref=br_rs"> <img src="@/assets/img/icons/fb.png" alt=""> </a>
            <a class="social-link social-link--linkedin" target="_blank" href="https://www.linkedin.com/company/oan---online-advertising-network/"> <img src="@/assets/img/icons/linkedin.png" alt=""> </a>
          </div>

          <div class="d-flex justify-content-center pt-4 footer-col footer-col-4">
            <img src="@/assets/img/footer-icons.png" alt="">
          </div>

        </div>

      </div>
    </div>
  </div>
</footer>

</template>

<script>

export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.footer {
  padding-top: 20px;
  padding-bottom: 40px;

  @include lg {
    padding-bottom: 60px;
  }
  a {
    text-decoration: none !important;
    color: #354185;
    font-size: 14px;
    &:hover {
      img {
        opacity: .9;
      }
    }
  }

  &--menu {
    @include max-lg {
      width: 80%;
      margin: 0 auto;
    }
  }

  .social-link--linkedin {
    position: relative;
    top: 20px;
    left: -8px;
  }

  .footer-col {
    &-1 {
      img {
        transform: scale(.8);
      }
    }
  }


}

</style>
