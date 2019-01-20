<template>
  <div class="footer">
    <div class="left">
      <i class="far fa-copyright"></i>
      Daniel Rötzer, 1100 Vienna
    </div>

    <div class="right">
      <a href="mailto:roetzer.daniel@gmail.com" class="mailto" target="_top">
        <i class="fas fa-envelope"></i>
        <span>roetzer.daniel@gmail.com</span>
      </a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid lightgray;
  background-color: white;
  padding: 10px 15px;
  font-size: 12px;
  
  .left {
    float: left;
  }

  .right {
    float: right;

    .mailto {
      color: map-get($colors, text);
      text-decoration: none;

      i {
        margin-right: 2px;
      }

      &:hover {
        color: map-get($colors, primary);
      }
    }
  }
  
  @media screen and (min-width: $utility-breakpoint){
    padding-left: $utility-width + 15px;
  }
}
</style>
