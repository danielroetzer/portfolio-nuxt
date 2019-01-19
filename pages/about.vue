<template>
  <div class="about">
    <div class="main-title">What purpose has this website?</div>
    <div class="infoblock">This website is a personal project and serves as reference, for my projects and experience.</div>

    <div class="main-title">What utilities or tools where used for development?</div>
    <div class="infoblock">
      <span>
        Besides the main goal of building a portfolio website for myself, the other two major things are responsiveness and speed.
        I wanted to not only build a fully responsive site, but also a really fast one. 
        Keeping that in mind, the following describes the tools I used and why.
      </span>
      <br><br>

      <div class="sub-title">Nuxt.js</div>
      <div>
        I decided to use Nuxt.js, because it makes the build process really easy and uses Vue.js.
        Furthermore, Nuxt lets you create server side rendered applications, which is a huge benefit for SEO.
        In addition, there is an option to export your website as a static generated Vue application, which greatly improves performance.
      </div>

      <br>

      <div class="sub-title">Tailwind CSS</div>
      <div>
        For this project, I decided to not use a front-end component library like Bootstrap or Bulma, because they did not fit the design I had in mind for this website.
        However, I still needed a responsive grid, so I picked Tailwind CSS.
      </div>

      <br>

      <div class="sub-title">Netlify</div>
      <div>
        To host my portfolio page, I use Netlify. It provides good free usage options and deploying could not be easier. 
        Once setup, Netlify automatically deploys my project from the master branch in my GitLab repository. 
        I simply push changes to the master branch and Netlify does the rest.
      </div>
    </div>

    <div class="main-title">Contact</div>
    <div class="infoblock">
      You can reach me under:
      <a href="mailto:roetzer.daniel@gmail.com" class="mailto" target="_top">
        <i class="fas fa-envelope"></i>
        <span>roetzer.daniel@gmail.com</span>
      </a>
    </div>
  </div>
</template>


<script>

</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.infoblock {
  font-size: 14px;
  margin-bottom: 35px;

  .mailto {
    color: map-get($colors, text);
    text-decoration: none;

    i {
      margin-left: 5px;
      margin-right: 2px;
    }

    &:hover {
      color: map-get($colors, primary);
    }
  }
}
</style>
