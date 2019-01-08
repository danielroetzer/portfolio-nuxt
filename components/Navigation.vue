<template>
  <div class="navigation">
    <nav class="navbar">
      <div class="navbar-burger" @click="toggleMobileNavigation">
        <ion-icon name="arrow-forward"></ion-icon>
        <span>{{activePage}}</span>
      </div>
      <div class="mobile-navbar-menu" v-show="mobileMenuActive === true">
        <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/" exact>{{pageNames.index}}</nuxt-link>
        <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/projects">{{pageNames.projects}}</nuxt-link>
        <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/about">{{pageNames.about}}</nuxt-link>
        <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/contact">{{pageNames.contact}}</nuxt-link>

        <ion-icon name="ios-close" class="mobile-navbar-menu-close" @click="toggleMobileNavigation"></ion-icon>
      </div>

      <div class="navbar-menu">
        <nuxt-link class="navbar-item" to="/" exact>{{pageNames.index}}</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">{{pageNames.projects}}</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">{{pageNames.about}}</nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">{{pageNames.contact}}</nuxt-link>
      </div>
    </nav>

    <div class="flex flex-wrap introduction">
        <div class="w-full sm:w-1/2 lg:w-full">
          <img src="~assets/img/portrait-400x400.png" class="portrait">
        </div>
        <div class="w-full sm:w-1/2 lg:w-full text-center sm:text-left lg:text-center my-4">
          <h3>Daniel Rötzer</h3>
          JavaScript Developer <br><br>

          roetzer.daniel@gmail.com
        </div>
        <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey">C</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light">D</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey">E</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey-light">F</div>-->
      </div>
  </div>
</template>


<script>

const pageNames = {
  index: "My Experience",
  projects: "Projects",
  about: "About this Site",
  contact: "Contact"
}

export default {
  data() {
    return {
      mobileMenuActive: false,
      pageNames
    }
  },
  computed: {
    activePage: function() {
      if(pageNames[this.$nuxt.$route.name]) {
        return pageNames[this.$nuxt.$route.name];
      }

      return "unknown";
    }
  },
  methods: {
    toggleMobileNavigation: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
      console.log(this.mobileMenuActive);
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.navbar {
  .navbar-burger {
    cursor: pointer;
    display: flex;
    margin-bottom: 15px;

    @media screen and (min-width: $utility-breakpoint){
      margin-bottom: 0;
      display: none;
    }
  }

  .mobile-navbar-menu {
    position: absolute;
    top: 0;
    left: 0;
    background-color: map-get($colors, primary);
    width: 100%;
    height: 100%;
    animation: example .35s;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    .navbar-item {
      display: flex;
      color: white;
      text-decoration: none;
      font-size: 24px;
      margin: 20px 0;

      &:hover {
        color: black;
      }
    }

    .mobile-navbar-menu-close {
      position: absolute;
      top: 25px;
      right: 25px;
      color: white;
      font-size: 48px;
      cursor: pointer;

      &:hover {
        color: black;
      }
    }
  }

  @keyframes example {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .navbar-menu {
    display: none;

    @media screen and (min-width: $utility-breakpoint){
      display: flex;
      flex-direction: column;

      padding: 15px 10px;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
    }

    // used for <nuxt-link> components
    .navbar-item {
      //display: block;
      text-decoration: none;
      color: white;
      font-size: 1.2em;
      width: 100%;
      padding: 8px 10px;

      

      &.is-active, &:hover {
        background-color: white;
        color: black;
        box-shadow: -1px 1px 4px #333;
        border-radius: 4px;
      }
    }
  }
}


.portrait {
  display: block;
  margin: 0 auto;
  height: 100px;
  width: 100px;

  border-radius: 51%;
  box-shadow: 0 0 20px 1px black;
  //border: 2px dashed white;

  @media screen and (min-width: $utility-breakpoint){
    margin: 10px auto;
    height: 130px;
    width: 130px;
  }
}

.introduction {
  @media screen and (min-width: $utility-breakpoint){
    margin: 40px 0;
  }
}
</style>
