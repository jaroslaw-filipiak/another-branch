<template>
  <intersection-observer
    sentinal-name="sentinal-name"
    @on-intersection-element="onIntersectionElement">
  </intersection-observer>
<section class="counters">
  <div class="container-fluid">
    <div class="container">

      <div class="row">
        <div class="col text-center" data-aos="fade-up">
          <h3 class="font-600">OAN w <span class="underline">liczbach</span> </h3>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-center counters--items-wrapper" >

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-1.png" alt="">
            <div class="counter--value"><number
              ref="number1"
              :from="10"
              :to="80"
              :format="theFormat"
              :duration="3"
              :delay="0"
              easing="Power1.easeOut"/></div>
          </div>
          <p>Analizujemy 80 mln plików cookies polskich internautów</p>
        </div>

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-2.png" alt="">
            <div class="counter--value">
              <number
                ref="number2"
                :from="100"
                :to="950"
                :format="theFormat"
                :duration="3"
                :delay="0"
                easing="Power1.easeOut"/>
            </div>
          </div>
          <p>Ponad 950 zrealizowanych kampanii rocznie</p>
        </div>

        <div class="col counter-item" data-aos="fade-up">
          <div class="d-flex align-items-center">
            <img src="@/assets/img/counter-3.png" alt="">
            <div class="counter--value"> <number
              ref="number3"
              :from="100"
              :to="700"
              :format="theFormat"
              :duration="3"
              :delay="0"
              easing="Power1.easeOut"/></div>
          </div>


          <p>Ponad 700 klientów rocznie</p>
        </div>

      </div>
    </div>
  </div>
</section>
</template>

<script>
/* eslint-disable */
import VueJsCounter from 'vue-js-counter';
import IntersectionObserver from "@/components/IntersectionObserver";

export default {
  name: 'Counters',
  data() {
    return {
      show: true,
      isVisible: true,
      throttle: 0,
      threshold: 0,
      currentInfo: false,
      visible: true,
      isIntersectingElement: false,
    };
  },
    components: {
            VueJsCounter,
            IntersectionObserver,
        },
    methods: {
       onIntersectionElement(value) {
         console.log('visible element');
         this.isIntersectingElement = value;
         this.$refs.number1.restart()
         this.$refs.number2.restart()
         this.$refs.number3.restart()
    },
    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

.counters {
  padding-top: 80px;
  padding-bottom: 80px;

  &--items-wrapper {
    @include lg {
      gap: 150px;
    }
  }

  h3 {
    margin-bottom: 70px;
  }

  .counter-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    text-align: center;
    border: 1px solid #fff;

    @include max-lg {
      min-width: 80%;
      margin-bottom: 60px;
    }

    .counter--value {
      font-weight: bold;
      font-size: 60px;
      color: #dddddd;

      span {
        display:inline-block;
        min-width: 132px;
      }
    }

    p {
      margin-top: 20px;
      position: relative;

      &:after {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translate(-50% , 0%);
      }

    }


  }

}

</style>
