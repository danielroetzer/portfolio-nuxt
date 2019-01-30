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
  // box-shadow: 0 2px 2px -2px #777;
  box-shadow: 0 2px 6px 0 #777;

  @media screen and (min-width: $utility-breakpoint){
    max-width: $utility-width;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 1px 0 6px 0 #777;
  }
}

.page-container {
  width: 100%;
  padding: 20px;

  // Margin for Footer
  margin-bottom: 35px;

  @media screen and (min-width: $utility-breakpoint){
    margin-left: $utility-width;
    //max-width: $content-width;
    padding: 30px;
  }

  .page-content {
    .container {
      max-width: 1100px;
    }
  }
}
</style>