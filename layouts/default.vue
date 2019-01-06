<template>
  <div class="layout-container">
    <div class="utility">
      <Navigation/>
    </div>

    <div class="page-container">
      <div class="page-content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>


<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.layout-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
}

.utility {
  color: white;
  background-color: map-get($colors, primary);//#503656;
  width: 100%;
  padding: 20px;
  font-weight: 300;

  @media screen and (min-width: $utility-breakpoint){
    max-width: $utility-width;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    //padding-top: 45px;
  }
}

.page-container {
  width: 100%;
  padding: 30px;

  @media screen and (min-width: $utility-breakpoint){
    margin-left: $utility-width;
    max-width: $content-width;
  }

  .page-content {
    margin: 0 auto;

    @media screen and (min-width: $utility-breakpoint){
      max-width: 600px;
    }
  }
}
</style>