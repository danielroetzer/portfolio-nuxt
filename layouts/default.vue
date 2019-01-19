<template>
  <div class="layout-container">
    <div class="utility">
      <Navigation/>
    </div>

    <div class="page-container">
      <div class="page-content">
        <div class="container mx-auto">
          <nuxt/>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>


<script>
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer
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
    z-index: 10;
    //padding-top: 45px;
  }
}

.page-container {
  width: 100%;
  padding: 30px;

  @media screen and (min-width: $utility-breakpoint){
    margin-left: $utility-width;
    //max-width: $content-width;
  }

  .page-content {
    .container {
      max-width: 1100px;
    }
  }
}
</style>