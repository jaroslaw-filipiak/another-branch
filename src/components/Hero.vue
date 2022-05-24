<template>
  <section class="home-hero" data-aos="fade-up">
    <div class="container-fluid">
      <div class="container">

        <div class="row d-flex flex-column flex-lg-row align-items-center justify-content-between">

          <div  class="col text-center text-lg-start">

            <!-- <div v-html="hero.data.attributes.Hero.text"></div>-->

            <h1>Programmatic & <br> <span class="underline">Data solutions</span></h1>
            <h2>Sprawdź jak wdrożyć działania programmatic wspierane analizą Big Data</h2>

            <div class="d-flex flex-column flex-lg-row">
            <NewsletterForm/>
            </div>
          </div>

          <div class="col">
            <img class="home-hero--icon img-fluid" src="@/assets/img/hero-icon.png" alt="">
          </div>

          <div class="flex-column align-items-center d-none d-lg-flex overflow-hidden">
            <img class="home-hero--indicator" src="@/assets/img/section-indicator.png" alt="">
            <img class="home-hero--indicator-icon" src="@/assets/img/icons/arrow-down.svg" alt="">
          </div>

        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-11 text-center">
            <h3>Według IAB Europe do 2021 roku <strong>ponad 85% reklam </strong> w Europie <br> będzie realizowanych w modelu programmatic. Czas na Twoją kampanię.
            </h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import NewsletterForm from '@/components/Forms/NewsletterForm.vue';

export default {
  name: 'Hero',
  components: { NewsletterForm },
  props: ['hero'],
};
</script>

<style lang="scss" >
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";

.home-hero {

  h1 {
    @include max-lg {font-size: 39px;}
    @include lg {
      max-width: 473px;
    }
  }

  &--icon {
    position: relative;
    top: -13%;
  }

  &--indicator-icon {
    margin-top: -15px;
    width: 16px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    padding: 50px 0px;
  }
}

h2 {
  font-weight: 400;
  margin-bottom: 45px;
  @include lg {
    max-width: 550px;
  }

}


</style>
