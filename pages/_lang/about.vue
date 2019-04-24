<template>
  <div class="about">
    <div class="main-title">{{ $t("about.purpose.title") }}</div>
    <div class="infoblock">{{ $t("about.purpose.text") }}</div>

    <div class="main-title">{{ $t("about.tools.title") }}</div>
    <div class="infoblock">
      <div>{{ $t("about.tools.text") }}</div>
      <br>

      <div class="sub-title">Nuxt.js</div>
      <div>{{ $t("about.tools.nuxt") }}</div>

      <br>

      <div class="sub-title">Tailwind CSS</div>
      <div>{{ $t("about.tools.tailwind") }}</div>

      <br>

      <div class="sub-title">Netlify</div>
      <div>{{ $t("about.tools.netlify") }}</div>
    </div>

    <div class="main-title">{{ $t("about.contact.title") }}</div>
    <div class="infoblock">
      {{ $t("about.contact.text") }}
      <a href="mailto:roetzer.daniel@gmail.com" class="mailto" target="_top">
        <i class="fas fa-envelope"></i>
        <span>roetzer.daniel@gmail.com</span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  head () {
    return {
      title: this.$t("head.about.title")
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.about {
  .main-title {
    font-size: 1.5em;
    margin-bottom: 8px;
    color: map-get($colors, primary);
  }

  .sub-title {
    font-size: 1.2em;
    margin-bottom: 8px;
    color: map-get($colors, primary);
  }

  .infoblock {
    font-size: 14px;
    margin-bottom: 35px;

    .mailto {
      color: map-get($colors, dark);
      text-decoration: none;
      white-space: nowrap;

      i {
        margin-left: 5px;
        margin-right: 2px;
      }

      &:hover {
        color: map-get($colors, primary);
      }
    }
  }
}
</style>