<template>
  <!--<div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey">A</div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light">B</div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey">C</div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light">D</div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey">E</div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey-light">F</div>
  </div>-->
  <div>
    <div class="home">
      <div class="character">
        <div>
          <img src="~assets/img/portrait.jpg" class="character-img">
          <h2>Daniel Rötzer</h2>
          


        </div>
      </div>

      <div class="timeline">
        <div>
          AAAAAAA<br>
          BBBB
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
$character-width: 35%;


.home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
}

.character {
  display: block;
  color: white;
  background-color: $main-color-dark;
  text-align: center;
  width: 100%;
  font-weight: 300;
  padding: 20px 0;

  @media screen and (min-width: 768px){
    max-width: $character-width;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 45px;
  }

  .character-img {
    display: block;
    margin: 10px auto;
    height: 140px;

    border-radius: 50%;
    border: 2px solid white;
  }
}

.timeline {
  width: 100%;

  @media screen and (min-width: 768px){
    margin-left: $character-width;
    max-width: (100% - $character-width);
  }
}
</style>

