<template>
  <div class="projects">
    
  </div>
</template>

<script>
export default {
  computed: {
    projects: function() {
      return [
        { key: "jada", title: this.$t("projects.jada.title"), subtitle: this.$t("projects.jada.subtitle"), date: "2015", icon: "/img/projects/jada.png", content: this.$t("projects.jada.content"), gitlab: "https://gitlab.com/daniel.roetzer/jada", website: "https://jada-template.netlify.com/" },
        { key: "rtvs", title: this.$t("projects.rtvs.title"), subtitle: this.$t("projects.rtvs.subtitle"), date: "2015", icon: "/img/projects/jada.png", content: this.$t("projects.rtvs.content"), gitlab: "https://gitlab.com/daniel.roetzer/jada", website: "https://jada-template.netlify.com/" }
      ]
    }
  }
}
</script>




<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

</style>