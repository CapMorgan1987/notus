<template>
  <v-container>
    <Menu />
    <v-row class="gallery-row mb-3">
      <v-col cols="12">
        <p class="white--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges:
          constructio interrete. Ut aliquid scire se gaudeant? Illi enim inter
          se dissentiunt. Nec vero sum nescius esse utilitatem in historia, non
          modo voluptatem. Quamquam te quidem video minime esse deterritum.
        </p>
      </v-col>
      <v-col cols="12" md="3">
        <v-img
          :src="require('@/assets/notus-task3-img1.jpg')"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="require('@/assets/notus-task3-img2.jpg')"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="require('@/assets/notus-task3-img3.jpg')"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="require('@/assets/notus-task3-img4.jpg')"
          aspect-ratio="1"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Menu from "@/components/Menu.vue";

  export default {
    name: "Gallery",
    components: {
      Menu,
    },
  };
</script>

<style>
  .gallery-row {
    margin-top: 200px;
  }
  @media screen and (max-width: 960px) {
    .gallery-row {
      margin-top: 60px;
    }
  }
</style>