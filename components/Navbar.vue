<template>
  <nav class="navbar">
    <div class="navbar-burger" @click="toggleMobileNavigation">
      <i class="fas fa-bars"></i>
      <span>{{activePage}}</span>
    </div>
    <div class="mobile-navbar-menu" v-show="mobileMenuActive === true">
      <!-- <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/" exact>{{pageNames.index}}</nuxt-link>
      <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/projects">{{pageNames.projects}}</nuxt-link>
      <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/about">{{pageNames.about}}</nuxt-link>
      <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" to="/contact">{{pageNames.contact}}</nuxt-link> -->
      <nuxt-link class="navbar-item" @click.native="toggleMobileNavigation" v-for="item in navItems" :key="item.id" :to="item.to" :exact="item.exact">{{item.pageName}}</nuxt-link>

      <button class="mobile-navbar-menu-close" @click="toggleMobileNavigation">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <!-- <div class="navbar-menu" @click="closeMobileNavigation">
      <nuxt-link class="navbar-item" to="/" :exact="false">{{pageNames.index}}</nuxt-link>
      <nuxt-link class="navbar-item" to="/projects">{{pageNames.projects}}</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">{{pageNames.about}}</nuxt-link>
      <nuxt-link class="navbar-item" to="/contact">{{pageNames.contact}}</nuxt-link>
    </div> -->

    <div class="navbar-menu" @click="closeMobileNavigation">
      <nuxt-link class="navbar-item" v-for="item in navItems" :key="item.id" :to="item.to" :exact="item.exact">{{item.pageName}}</nuxt-link>
    </div>
  </nav>
</template>


<script>

// const pageNames = {
//   index: "My Experience",
//   projects: "Projects",
//   about: "About this Site"
// }

// Every array entry will be rendered as a .navbar-item
const navItems = [
  { exact: true, to: "/", id: "index", pageName: "Portfolio" },
  { exact: false, to: "/about", id: "about", pageName: "About this Site" },
  { exact: false, to: "/projects", id: "projects", pageName: "Projects" },
  //{ exact: false, to: "/contact", id: "contact", pageName: "Contact" }
];

export default {
  data() {
    return {
      mobileMenuActive: false,
      navItems
    }
  },
  computed: {
    activePage: function() {
      // Find active page
      const item = navItems.find(item => {
        if(item.id === this.$nuxt.$route.name) {
          return true;
        }

        return false;
      });

      return item ? item.pageName: "unknown";
    }
  },
  methods: {
    toggleMobileNavigation: function() {
      this.mobileMenuActive = !this.mobileMenuActive;
    },
    closeMobileNavigation: function() {
      this.mobileMenuActive = false;
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.navbar {
  padding: 5px 0;

  .navbar-burger {
    cursor: pointer;
    display: inline-block;

    &:hover {
      color: black;
    }

    span {
      display: inline-block;
      margin-left: 5px;
    }

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
    animation: mobileNavbarAnimation .35s;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @keyframes mobileNavbarAnimation {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @media screen and (min-width: $utility-breakpoint){
      display: none;
    }

    .navbar-item {
      display: flex;
      color: white;
      text-decoration: none;
      font-size: 24px;
      margin: 20px 0;

      &.is-active {
        text-decoration: underline;
        color: black;
      }

      &:hover {
        color: black;
      }
    }

    .mobile-navbar-menu-close {
      position: absolute;
      top: 25px;
      right: 25px;
      color: white;
      font-size: 40px;
      cursor: pointer;
      outline: 0;

      &:hover {
        color: black;
      }
    }
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
</style>
