<template>
  <div>
    <div class="loader" v-show="!isLoaded">
      <v-row>
        <v-col align-self="center">
          <v-img
            :src="require('@/assets/Notus-logo-loading.png')"
            class="loading-logo animate"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </div>
    <Menu />
    <v-carousel
      height="100vh"
      hide-delimiters
      :show-arrows="false"
      ref="carousel"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        transition="slide-y-transition"
      >
        <h1 class="text-slider">{{ slideText }}</h1>
        <v-overlay absolute color="#081B2F" opacity="0.7"> </v-overlay>
        <v-row class="ma-0 menu-logo-div">
          <v-col align-self="center" class="pa-0">
            <v-img
              :src="require('@/assets/Notus-logo-main.png')"
              class="menu-logo"
              contain
            ></v-img>
          </v-col>
        </v-row>
        <div class="carousel-navigation">
          <div class="carousel-inner">
            <v-img
              class="prev"
              :src="require('../assets/next.png')"
              @click.stop="$refs.carousel.prev()"
            ></v-img>
            <p class="counter">{{ i + 1 }} / {{ items.length }}</p>
            <v-img
              class="next"
              :src="require('../assets/next.png')"
              @click.stop="$refs.carousel.next()"
            ></v-img>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import Menu from "@/components/Menu.vue";

  export default {
    name: "Slider",
    data() {
      return {
        isLoaded: false,
        overlay: false,
        slideText: "Notus Front-end test",
        items: [
          {
            src: require("../assets/notus-task1-img1.jpg"),
          },
          {
            src: require("../assets/notus-task1-img2.jpg"),
          },
          {
            src: require("../assets/notus-task1-img3.jpg"),
          },
        ],
      };
    },
    created() {
      setTimeout(() => (this.isLoaded = true), 1500);
    },
    components: {
      Menu,
    },
  };
</script>

<style scoped>
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #081b2f;
    z-index: 998;
  }
  .loading-logo {
    width: 200px;
    height: 200px;
  }
  .paragraph-loader {
    color: white;
    margin-top: 40px;
    font-size: 18px;
  }
  .text-slider {
    position: fixed;
    color: white;
    z-index: 998;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 60px;
  }
  .menu-logo-div {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 100px;
    z-index: 998;
  }
  .menu-logo {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    z-index: 999;
  }
  .carousel-navigation {
    position: absolute;
    bottom: 100px;
    z-index: 998;
    left: 50%;
  }
  .carousel-inner {
    position: relative;
    left: -50%;
    display: flex;
    align-items: center;
  }
  .next,
  .prev {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  .next {
    transform: rotate(180deg);
  }
  .counter {
    margin-bottom: 0 !important;
    color: white;
    padding: 0 10px;
    opacity: 0.6;
    font-size: 16px;
  }
  @keyframes animate {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .animate {
    animation: animate 1.5s infinite;
  }
  @media screen and (max-width: 960px) {
    .text-slider {
      font-size: 30px;
      padding: 0 20px;
      text-align: center;
    }
  }
</style>
