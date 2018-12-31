<template>
  <div>
    <div class="navbar">Navbar</div>
    <nuxt/>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
.navbar {
  color: white;
  background-color: darken($main-color-dark, 5%);
  height: $navbar-height;

  position: relative;
  z-index: 10;
}
</style>
