<template>
  <div>
    <v-app-bar color="transparent" absolute class="menu" elevation="0">
      <div class="d-flex menu-icon">
        <p class="icon-text">Menu</p>
        <v-img
          :src="require('@/assets/notus-meni.png')"
          @click="drawer = true"
          class="nav-icon"
          contain
          icon
        ></v-img>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="100%"
      color="#F89D36"
    >
      <v-row class="ma-0 menu-logo-div">
        <v-col align-self="center" class="pa-0">
          <v-img
            :src="require('@/assets/Notus-logo-meni.png')"
            class="menu-logo"
            contain
          ></v-img>
        </v-col>
      </v-row>
      <div class="d-flex menu-icon open-nav">
        <p class="icon-text">Exit</p>
        <v-img
          :src="require('@/assets/notus-meni-close.png')"
          @click="drawer = false"
          class="nav-icon"
          contain
          icon
        ></v-img>
      </div>
      <div class="menu-list d-flex flex-column">
        <v-btn class="menu-text" plain to="/"><p>HOME</p></v-btn>
        <v-btn class="menu-text" plain to="/gallery"><p>TASK 3</p></v-btn>
        <v-btn class="menu-text" plain to="/slider"><p>TASK 4</p></v-btn>
        <v-btn class="menu-text" plain to="/map"><p>TASK 5</p></v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        drawer: false,
      };
    },
  };
</script>

<style scoped>
  .menu {
    z-index: 999;
    width: 100px;
    height: 23px;
    left: 100px !important;
    top: 100px !important;
  }
  .menu-icon {
    flex-direction: column;
    max-width: auto;
    height: 30px !important;
  }
  .open-nav {
    position: absolute;
    top: 100px;
    left: 100px;
  }
  .icon-text {
    color: white;
    font-size: 15px;
    max-width: 150px;
  }
  .icon-text {
    margin-bottom: 0 !important;
  }
  .nav-icon {
    max-width: 23px !important;
    cursor: pointer;
    height: 30px !important;
  }
  .menu-list {
    margin-top: 250px;
    margin-left: 250px;
  }
  .menu-logo-div {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 100px;
  }
  .menu-logo {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
  .menu-text {
    background-color: transparent;
    margin-top: 30px;
    height: 73px !important;
    width: 250px;
  }
  .menu-text p {
    font-size: 60px;
    line-height: 73px;
    color: white;
    margin: 0 !important;
  }

  @media screen and (max-width: 960px) {
    .menu {
      left: 10px !important;
      top: 10px !important;
    }
    .open-nav {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .menu-icon {
      padding: 20px 0 0 20px;
    }
    .menu-list {
      margin-top: 30%;
      margin-left: 30px;
    }
    .menu-text {
      width: 150px;
      margin-top: 15px;
      height: 42px !important;
    }
    .menu-text p {
      font-size: 30px;
      line-height: 42px;
      height: 42px;
      margin-top: 10px !important;
    }
  }
</style>