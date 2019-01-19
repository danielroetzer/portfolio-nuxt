<template>
  <div class="layout-container">
    <div class="navbar-container">
      <Navbar/>
    </div>
    <nuxt/>
  </div>
</template>


<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.layout-container {
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: map-get($colors, primary);

  .navbar-container {
    position: fixed;
    top: 20px;
    left: 20px;
  }
}
</style>