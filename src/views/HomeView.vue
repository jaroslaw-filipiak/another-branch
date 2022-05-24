<template>

  <Hero :hero="pageHomepage"> </Hero>
  <Features/>

  <Cta>
    <template v-slot:col1>
      <div class="col cta-col cta-col-1 text-center">
        <h3>Porozmawiajmy o zwiększeniu konwersji</h3>
        <router-link class="oan-btn" to="/contact">Napisz do nas</router-link>
      </div>
    </template>

    <template  v-slot:col2>
      <div class="col cta-col cta-col-2 d-flex">
        <img src="@/assets/img/cta-img.png" alt="">
      </div>
    </template>
  </Cta>

  <Why-us/>
  <Steps/>
  <Testimonials/>
  <Logos-slider/>

  <Cta>
    <template v-slot:col1>
      <div class="col cta-col cta-col-1 text-center">
        <h3>Czekamy na Ciebie:</h3>
        <p>Porozmawiajmy o precyzyjnym dotarciu do Twoich klientów:</p>
        <router-link class="oan-btn" to="/contact">Napisz do nas</router-link>
      </div>
    </template>
  </Cta>

  <Footer/>

</template>

<script>

import Hero from '@/components/Hero.vue';
import Features from '@/components/Features.vue';
import Cta from '@/components/Cta.vue';
import WhyUs from '@/components/Why-us.vue';
import Steps from '@/components/Steps.vue';
import Testimonials from '@/components/Testimonials.vue';
import LogosSlider from '@/components/Logos-slider.vue';
import Footer from '@/components/Footer.vue';
import gql from 'graphql-tag';

export default {
  components: {
    Footer,
    LogosSlider,
    Testimonials,
    Steps,
    WhyUs,
    Cta,
    Features,
    Hero,
  },

  data() {
    return {
      pageHomepage: {
        data: {
          attributes: {
            Hero: {
              text: '',
            },
          },
        },
      },
      test: 'sdf',
    };
  },
  apollo: {
    pageHomepage: gql`
    query getHomepageData {
 pageHomepage(locale: "${localStorage.getItem('lang') || 'en'}") {
  data {
   attributes {
    test
   \tHero {
      text,
      heroImage {
        data{
          attributes{
            url
          }
        }
      }
      newsletterLawInfo
    }
  }
  }
}
}`,
  },
  created() {
    document.title = 'Online Advertising Network';
  },
};

</script>
