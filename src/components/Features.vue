<template>
  <section class="home-features" >
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h3 class="font-600">W zakresie usług <span class="underline"> data & programmatic</span>  oferujemy</h3>
          </div>
        </div>

        <div class="row items-row items-row-1">
          <!-- trading desk-->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Trading Desk</h4>
              <p>Nauczymy Cię jak samodzielnie rozpocząć przygodę z programmatic.</p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>

          <!-- Dane oraz technologia DMP-->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Dane oraz technologia DMP</h4>
              <p>Segmenty wysokiej jakości danych stworzone specjalnie na potrzeby Twojej kampanii, np. rowerzyści w Twoim mieście.
              </p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>

        </div>

        <div class="row items-row items-row-2">
          <!-- Dedykowane modele zwiększające konwersje-->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Dedykowane modele zwiększające konwersje
              </h4>
              <p>Przeprowadzimy analizę użytkowników Twojego serwisu oraz powiemy czym kierują się wybierając Twój produkt.
              </p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>

          <!-- Kampanie programmatic -->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Kampanie programmatic
              </h4>
              <p>Prowadzimy skuteczne kampanie programmatic maksymalizujące sprzedaż.</p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>
        </div>

        <div class="row items-row items-row-3">
          <!-- Optymalizacja kampanii reklamowych-->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Optymalizacja kampanii reklamowych
              </h4>
              <p>Wykorzystujemy technologię do zwiększania skuteczności Twoich kampanii.</p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>

          <!-- Szkolenia programmatic & data-->
          <div class="col-6 home-feauters--item" >
            <div class="item__icon">
              <img src="@/assets/img/trading-desk-icon.png" alt="">
            </div>
            <div class="item__content">
              <h4>Szkolenia programmatic & data</h4>
              <p>Prowadzimy szkolenia dla marketerów z zakresu wykorzystania danych i technologii w kampaniach programmatic.</p>
              <a class="oan-btn" href="#">Więcej</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style  lang="scss" scoped>
@import "@/assets/scss/utils/_variables";
@import "@/assets/scss/utils/_rwd";

.items-row {
  @include lg {
    position: relative;
    &::after {
      content: '';
      width: 400vw;
      height: 1px;
      display: block;
      background: $gray;
      position: absolute;
      left: -100vw;
      bottom: 0;
    }

    &-1 {
      &::before {
        content: '';
        width: 400vw;
        height: 1px;
        display: block;
        background: $gray;
        position: absolute;
        left: -100vw;
        top: 0;
      }
    }
  }

}

.item__content  {
  @include lg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
  }

  .oan-btn {
    width: 133px;
  }
}
.item__icon  {
  @include lg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    padding-right: 20px;
    transform: scale(.8);
  }

  @include xl {
    padding-right: 0px;
    transform: scale(1);
  }

}


.home-feauters {
  &--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 50px;
    border: 1px solid $gray;
    border-top: none;

    &:nth-of-type(even) {
      border-bottom: none;

      @include lg {
        border-right: none;
        border-left: none;
      }

    }

    &:nth-of-type(odd) {
      @include lg {
        border-left: none;
      }

    }

    &:first-child {
      border-top: 1px solid $gray;

    }

    @include lg {
      border-bottom: none !important;
      border-top: none !important;
    }

    @include max-lg {
      width: 100%;
      text-align: center;
    }

    @include lg {
      flex-direction: row;
      align-items: flex-start;
      padding: 25px 5px;
    }

    @include xl {
      padding: 50px;
    }

    h4 {
      margin-bottom: 25px !important;
      margin-top: 25px !important;
      @include lg {
        margin-bottom: 50px !important;
      }
    }
    p {
      @include lg {
        max-width: 75%;
      }
    }
    .oan-btn {
      display: inline-block;
      margin-top: 25px !important;
      @include lg {
        margin-top: 35px !important;
      }
    }
    img {
      @include max-lg {
        transform: scale(.7);
      }
      @include xl {
        padding-right: 25px;
        padding-top: 30px;
      }
    }
  }
}
h3 {
  margin-bottom: 44px;
}
</style>
