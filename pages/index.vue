<template>
  <div class="home">
    <div class="character">
      <div class="flex flex-wrap content-center items-center" style="height: 100%;">
        <div class="w-1/2 md:w-full mb-4">
          <img src="~assets/img/portrait-400x400.png" class="character-img">
          <h2>Daniel Rötzer</h2>
        </div>
        <div class="w-1/2 md:w-full mb-4">Text about me</div>
        <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey">C</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light">D</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey">E</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey-light">F</div>-->
      </div>
    </div>

    <Timeline/>
  </div>
</template>


<script>
import Timeline from '~/components/Timeline.vue'

export default {
  components: {
    Timeline
  }
}
</script>



<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
}

.character {
  color: white;
  background-color: map-get($colors, primary);//#503656;
  text-align: center;
  width: 100%;
  padding: 20px 0;
  font-weight: 300;

  @media screen and (min-width: 768px){
    max-width: $character-width;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 45px;
  }

  .character-img {
    display: block;
    margin: 10px auto;
    height: 130px;
    width: 130px;

    border-radius: 51%;
    box-shadow: 0 0 20px 1px black;
    //border: 2px dashed white;

    @media screen and (min-width: 768px){
      height: 150px;
      width: 150px;
    }
  }
}
</style>

