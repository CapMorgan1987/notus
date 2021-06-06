<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    data() {
      return {};
    },
  };
</script>

<style>
  #app {
    max-width: 1920px;
    max-height: 1080px;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    background-color: #081b2f;
  }
  .menu .v-toolbar__content {
    padding: 0 !important;
    margin: 0 !important;
    height: auto !important;
  }
  @media screen and (max-width: 960px) {
    #app {
      max-height: 100%;
    }
  }
</style>
