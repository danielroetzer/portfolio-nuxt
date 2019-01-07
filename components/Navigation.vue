<template>
  <div class="navigation">
    <nav class="navbar">
      <div class="navbar-burger">Menu</div>
      <div class="navbar-menu">
        <nuxt-link class="navbar-item" to="/" exact>My Experience</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">About this Site</nuxt-link>
        <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
      </div>
    </nav>

    <div class="flex flex-wrap introduction">
        <div class="w-full sm:w-1/2 lg:w-full">
          <img src="~assets/img/portrait-400x400.png" class="portrait">
        </div>
        <div class="w-full sm:w-1/2 lg:w-full text-center sm:text-left lg:text-center my-4">
          <h3>Daniel Rötzer</h3>
          JavaScript Developer <br><br>

          roetzer.daniel@gmail.com
        </div>
        <!--<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey">C</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-grey-light">D</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey">E</div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-grey-light">F</div>-->
      </div>
  </div>
</template>


<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.navbar {
  .navbar-burger {
    //float: left;
    cursor: pointer;

    @media screen and (min-width: $utility-breakpoint){
      display: none;
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


.portrait {
  display: block;
  margin: 0 auto;
  height: 100px;
  width: 100px;

  border-radius: 51%;
  box-shadow: 0 0 20px 1px black;
  //border: 2px dashed white;

  @media screen and (min-width: $utility-breakpoint){
    margin: 10px auto;
    height: 130px;
    width: 130px;
  }
}

.introduction {
  @media screen and (min-width: $utility-breakpoint){
    margin: 40px 0;
  }
}
</style>
