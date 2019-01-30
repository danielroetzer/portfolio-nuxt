<template>
  <nav class="navbar">
    <!-- Mobile switches -->
    <div class="mobile-navbar">
      <button class="navbar-burger" @click="toggleMobileNavigation">
        <i class="fas fa-bars"></i>
        <span>{{activePage}}</span>
      </button>
      <nuxt-link class="mobile-i18n" v-if="$i18n.locale === 'de'" :to="'/en' + $route.fullPath.replace(/\/de/gi, '')" exact>
        <span>English</span>
        <i class="fas fa-language"></i>
      </nuxt-link>
      <nuxt-link class="mobile-i18n" v-else :to="'/de' + $route.fullPath.replace(/\/en/gi, '')" exact>
        <span>Deutsch</span>
        <i class="fas fa-language"></i>
      </nuxt-link>
    </div>

    <!-- Navbar for mobile -->
    <div class="mobile-navbar-menu" v-show="mobileMenuActive === true">
      <nuxt-link :class="'navbar-item delay-' + index" @click.native="toggleMobileNavigation" v-for="(item, index) in navItems" :key="item.id" :to="item.to" :exact="item.exact">
        {{item.pageName}}
      </nuxt-link>

      <button class="mobile-navbar-menu-close" @click="toggleMobileNavigation">
        <i class="fas fa-times"></i>
      </button>
    </div>


    <!-- Desktop Navbar -->
    <div class="navbar-menu" @click="closeMobileNavigation">
      <nuxt-link class="navbar-item" v-for="item in navItems" :key="item.id" :to="item.to" :exact="item.exact">
        {{item.pageName}}
      </nuxt-link>
    </div>

    <!-- Language switch -->
    <div class="i18n">
      <nuxt-link v-if="$i18n.locale === 'de'" :to="'/en' + $route.fullPath.replace(/\/de/gi, '')" exact>
        <i class="fas fa-language"></i>
        <span>English</span>
      </nuxt-link>
      <nuxt-link v-else :to="'/de' + $route.fullPath.replace(/\/en/gi, '')" exact>
        <i class="fas fa-language"></i>
        <span>Deutsch</span>
      </nuxt-link>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      mobileMenuActive: false
    }
  },
  computed: {
    navItems: function() {
      return [
        { exact: true, to: this.$i18n.path(""), id: "index", routeName: "lang", pageName: this.$t("links.index") },
        { exact: false, to: this.$i18n.path('about'), id: "about", routeName: "lang-about", pageName: this.$t("links.about") },
        { exact: false, to: this.$i18n.path('projects'), id: "projects", routeName: "lang-projects", pageName: this.$t("links.projects") },
        //{ exact: false, to: "/contact", id: "contact", pageName: "Contact" }
      ]
    },
    activePage: function() {
      // Find active page
      const item = this.navItems.find(item => {
        if(item.routeName === this.$nuxt.$route.name) {
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

  .mobile-navbar {
    display: flex;
    justify-content: space-between;

    .navbar-burger {
      color: white;
      outline: none;

      &:hover {
        color: map-get($colors, dark);
      }

      span {
        margin-left: 5px;
      }

      @media screen and (min-width: $utility-breakpoint){
        display: none;
      }
    }

    .mobile-i18n {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;

      &:hover {
        color: map-get($colors, dark);
      }

      i {
        font-size: 20px;
        margin-left: 6px;
      }

      @media screen and (min-width: $utility-breakpoint){
        display: none;
      }
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

      $duration: 0.5s;
      $delay: 0.2;
      animation: navbarItemAnimation $duration ease;

      @keyframes navbarItemAnimation {
        0% { transform: translateX(60px); }
        100% { transform: translateX(0); }
      }

      &.delay-0 { animation-duration: $duration + 0s * $delay; }
      &.delay-1 { animation-duration: $duration + 1s * $delay; }
      &.delay-2 { animation-duration: $duration + 2s * $delay; }
      &.delay-3 { animation-duration: $duration + 3s * $delay; }
      &.delay-4 { animation-duration: $duration + 4s * $delay; }
      &.delay-5 { animation-duration: $duration + 5s * $delay; }
      &.delay-6 { animation-duration: $duration + 6s * $delay; }
      &.delay-7 { animation-duration: $duration + 7s * $delay; }

      &.is-active {
        text-decoration: underline;
        color: map-get($colors, dark);
      }

      &:hover {
        color: map-get($colors, dark);
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
        color: map-get($colors, dark);
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
      text-decoration: none;
      color: white;
      font-size: 1.2em;
      width: 100%;
      padding: 8px 10px;
      

      &.is-active, &:hover {
        background-color: white;
        color: map-get($colors, dark);
        box-shadow: -1px 1px 4px #333;
        border-radius: 4px;
      }
    }
  }

  .i18n {
    width: 100%;
    text-align: center;
    display: none;

    a {
      font-size: 1.2em;
      color: white;
      text-decoration: none;

      &:hover {
        color: map-get($colors, dark);
      }

      i {
        margin-right: 4px;
      }
    }

    @media screen and (min-width: $utility-breakpoint){
      display: block;
      padding: 20px 0;
      border-bottom: 1px solid white;
    }
  }
}
</style>
