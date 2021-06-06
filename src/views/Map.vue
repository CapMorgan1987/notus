<template>
  <v-container>
    <Menu />
    <v-row class="gallery-row mb-3">
      <v-col cols="12">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44523.04508412504!2d15.984136495463842!3d45.77739622948983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf397a6cfa8839863!2sNotus!5e0!3m2!1sen!2shr!4v1622890397613!5m2!1sen!2shr"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </v-col>
    </v-row>
    <v-footer absolute color="black">
      <v-container>
        <v-col cols="12" class="d-flex justify-space-between align-center">
          <v-img
            class="logo-footer"
            :src="require('@/assets/Notus-logo-footer.png')"
            contain
          ></v-img>
          <v-btn class="footer-btn">Button</v-btn>
        </v-col>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script>
  import Menu from "@/components/Menu.vue";

  export default {
    name: "Map",
    components: {
      Menu,
    },
  };
</script>

<style scoped>
  #map iframe {
    width: 100%;
    min-height: 300px;
    height: 100%;
    margin-top: 20%;
  }
  .logo-footer {
    height: 30px;
    max-width: 105px;
  }
  .v-footer .col {
    padding: 0;
  }
  .footer-btn {
    color: #f89d36;
    background-color: #081b2f !important;
    border: 1px solid #f89d36;
    font-weight: bold;
    transition: 500ms;
  }
  .footer-btn:hover {
    color: #081b2f;
    background-color: #f89d36 !important;
    border: 1px solid #f89d36;
  }
</style>