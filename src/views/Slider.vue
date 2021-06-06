
<template>
  <v-container>
    <Menu />
    <v-row class="gallery-row mb-3">
      <v-carousel hide-delimiters class="pa-8">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          contain
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
  import Menu from "@/components/Menu.vue";

  export default {
    name: "Slider",
    data() {
      return {
        items: [
          {
            src: require("../assets/notus-task4-img1.jpg"),
          },
          {
            src: require("../assets/notus-task4-img2.jpg"),
          },
          {
            src: require("../assets/notus-task4-img3.jpg"),
          },
          {
            src: require("../assets/notus-task4-img4.jpg"),
          },
        ],
      };
    },
    components: {
      Menu,
    },
  };
</script>