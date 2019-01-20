<template>
  <div class="navigation">
    <Navbar/>

    <div class="flex flex-wrap introduction">
      <div class="w-full sm:w-1/2 lg:w-full">
        <img src="~assets/img/portrait2-400x400.png" class="portrait">
      </div>
      <div class="w-full sm:w-1/2 lg:w-full text-center sm:text-left lg:text-center my-4">
        <h3>Daniel Rötzer</h3>
        JavaScript Developer <br><br>

        <a href="mailto:roetzer.daniel@gmail.com" class="mailto" target="_top">
          <i class="fas fa-envelope"></i>
          <span>roetzer.daniel@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>



<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.introduction {
  .mailto {
    color: white;
    text-decoration: none;
    white-space: nowrap;

    i {
      margin-right: 2px;
    }

    &:hover {
      color: map-get($colors, text);
    }
  }

  @media screen and (min-width: $utility-breakpoint){
    margin: 40px 0;
    font-size: 14px;
  }

  .portrait {
    display: block;
    margin: 0 auto;
    height: 100px;
    width: 100px;

    border-radius: 51%;
    box-shadow: 0 0 8px 1px #333;
    //border: 2px dashed white;

    @media screen and (min-width: $utility-breakpoint){
      margin: 10px auto;
      height: 130px;
      width: 130px;
    }
  }
}
</style>
