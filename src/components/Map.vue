<template>
<section class="map">
  <div class="container-fluid map--bg" data-aos="fade-up" :style="{'background-image': 'url(' + require('@/assets/img/map-placeholder.jpg') + ')'}">
    <div class="container position-relative">
      <div class="map-pin">
        <img src="@/assets/img/map-pin.png" alt="">
        <div class="map-pin--animation">
          <div class="hex hex-1"></div>
          <div class="hex hex-2"></div>
          <div class="hex hex-3"></div>
          <div class="hex hex-4"></div>
        </div>
      </div>
      <div class="row d-flex justify-content-end justify-content-lg-start">
        <div class="col-12 col-lg-3  map--infobox" data-aos="fade-up">
          <div data-aos="fade-up" class="map--infobox-city h3">Warszawa</div>
          <div data-aos="fade-up" class="map--infobox-address">
            ul. Marszałkowska 89 <br>
            00-693 Warszawa
          </div>
          <a data-aos="fade-up" class="oan-btn" target="_blank" href="https://www.google.pl/maps/place/Marsza%C5%82kowska+89,+00-026+Warszawa/@52.2282182,21.010172,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecce74915a473:0xd2a707ba40286dee!8m2!3d52.2279781!4d21.0123111?shorturl=1">Pokaż dojazd</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'map',
};
</script>

<style lang="scss" scoped>

@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";
@import "@/assets/scss/utils/_mixins";

@keyframes myAnim {
  0%{
    opacity: 0;
    transform: scale(1);
  }

  100% {
    opacity: .4;
    transform: scale(0);
  }
}

.map {
  margin-top:- 74px;
  background-color: #eaeaea;

  &--bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
    @include xl {
      background-size: contain;
    }
  }
  .map-pin {
    position: absolute;
    left: 18%;
    top: 60%;

    @include sm {
      left: 20%;
      top: 60%;
    }

    @include md {
      left: 30%;
      top: 60%;
    }

    @include lg {
      left: 35%;
      top: 86%;
    }

    @include xl {
      left: 42%;
      top: 83%;
    }

    @include xxl {
      left: 40%;
      top: 85%;
    }

    &--animation {

      .hex {
        background: url('./../assets/img/hex.png') 50% no-repeat;
        background-size: cover;
        position: absolute;
        left: -82px;
        top: -63px;

       &-1 {
         width: 200px;
         height: 173px;
         animation: myAnim .8s ease-in 0s infinite reverse backwards;
       }
        &-2 {
          width: 200px;
          height: 173px;
          animation: myAnim .8s ease-in 1s infinite reverse backwards;
        }

        &-2 {
          width: 200px;
          height: 173px;
          animation: myAnim .8s ease-in 1s infinite reverse backwards;
        }
      }

    }
  }
  .container-fluid {
    height: 70vh;
    @include max-lg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @include lg {
      height: 660px;
    }

    .row {

      @include max-lg {
        padding-top: 74px;
        padding-bottom: 144px;
      }

    }
  }

  &--infobox {
    background-color: #fff;
    padding: 30px 24px;
    max-width: 240px;

    @include max-lg {
      margin-top: 74px;
    }

    @include lg {
      margin-top: 180px;
    }

    &-city {
      position: relative;
      margin-bottom: 40px;

      &:after {
        content: '';
        width: 21px;
        height: 6px;
        background-color: $accent;
        position: absolute;
        left: 10px;
        bottom: -23px;
        transform: translate(-50% , 0%);
      }
    }
    a {
      display: inline-flex;
      margin-top: 30px;
    }

  }

  .oan-btn {
    &:hover {
      opacity: .8;
    }
  }
}

</style>
