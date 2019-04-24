<template>
  <div class="projects">

    <!-- School projects -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("projects.school")}}</h1>
      </header>

      <div class="project-list">
        <div v-for="project in projects.school" :key="project.key" class="w-full">
          <div class="project-single">
            <div class="project-head">
              <header>
                <h2 class="title">{{ $t("projects."+ project.key +".title") }}</h2>
                <div class="subtitle">
                  <i class="fas fa-book"></i>
                  {{ $t("projects."+ project.key +".subtitle") }}
                </div>
              </header>

              <div v-if="project.icon">
                <img class="icon" :src="project.icon" alt="Project Icon">
              </div>
            </div>

            <div class="project-body">
              {{ $t("projects."+ project.key +".content") }}

              <div class="links" v-if="(project.gitlab) || (project.website)">
                <h3>
                  Links
                  <i class="fas fa-external-link-square-alt"></i>
                </h3>
                <a :href="project.gitlab" target="_blank" v-if="project.gitlab">
                  <i class="fab fa-gitlab"></i>
                  GitLab
                </a>

                <a :href="project.website" target="_blank" v-if="project.website">
                  <i class="fas fa-globe-europe"></i>
                  Homepage
                </a>
              </div>
            </div>

          </div>
        </div>
      </div> 
    </section>

    <!-- Work projects -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("projects.work")}}</h1>
      </header>

      <div class="project-list">
        <div v-for="project in projects.work" :key="project.key" class="w-full">
          <div class="project-single">
            <div class="project-head">
              <header>
                <h2 class="title">{{ $t("projects."+ project.key +".title") }}</h2>
                <div class="subtitle">
                  <i class="fas fa-book"></i>
                  {{ $t("projects."+ project.key +".subtitle") }}
                </div>
              </header>

              <div v-if="project.icon">
                <img class="icon" :src="project.icon" alt="Project Icon">
              </div>
            </div>

            <div class="project-body">
              {{ $t("projects."+ project.key +".content") }}

              <div class="links" v-if="project.gitlab || project.website || project.androidstore || project.iosstore">
                <h3>
                  Links
                  <i class="fas fa-external-link-square-alt"></i>
                </h3>
                <a :href="project.gitlab" target="_blank" v-if="project.gitlab">
                  <i class="fab fa-gitlab"></i>
                  GitLab
                </a>

                <a :href="project.website" target="_blank" v-if="project.website">
                  <i class="fas fa-globe-europe"></i>
                  Homepage
                </a>

                <a :href="project.androidstore" target="_blank" v-if="project.androidstore">
                  <i class="fab fa-android"></i>
                  Android
                </a>

                <a :href="project.iosstore" target="_blank" v-if="project.iosstore">
                  <i class="fab fa-apple"></i>
                  IOS
                </a>
              </div>
            </div>

          </div>
        </div>
      </div> 
    </section>
  </div>
</template>



<script>

export default {
  computed: {
    projects: function() {
      return {
        school: [
          { key: "jada", icon: "/img/projects/jada.png", gitlab: "https://gitlab.com/daniel.roetzer/jada", website: "https://jada-template.netlify.com/" },
          { key: "rtvs", gitlab: "https://gitlab.com/daniel.roetzer/rtvs" }
        ],
        work: [
          { key: "hfw", icon: "/img/projects/hfw.png", website: "https://www.hellofriends.at/" },
          { key: "hfc", icon: "/img/projects/hfc.png", androidstore: "https://play.google.com/store/apps/details?id=at.itcenter.kubid.hellofriends.customer", iosstore: "https://itunes.apple.com/app/id1439413680?mt=8" },
          { key: "hfp", icon: "/img/projects/hfp.png", androidstore: "https://play.google.com/store/apps/details?id=at.itcenter.kubid.hellofriends.business" }
        ],
        personal: []
      }
    },
    gridClass: function() {
      return {
        "w-full": !this.grid,
        "w-1/2": this.grid
      }
    }
  }
}
</script>




<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.projects {
  .switch-view {
    width: 100%;
    text-align: right;

    button {
      margin: 0 5px;
      color: map-get($colors, primary);
      border: 1px solid map-get($colors, primary);
      border-radius: 4px;
      outline: none;

      &.active, &:hover {
        background-color: map-get($colors, primary);
        color: white;
      }

      i {
        margin: 8px;
      }
    }
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;

    .project-single {
      border-radius: 4px;
      //border: 1px solid lightgray;
      // box-shadow: 0 10px 6px -8px #777;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      padding: 10px 15px;
      margin: 10px;


      .project-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        // flex-wrap: wrap;

        border-bottom: 1px solid lightgray;
        padding-bottom: 5px;
        margin-bottom: 15px;

        .title {
          font-weight: 300;
          color: map-get($colors, primary);
        }

        .subtitle {
          margin-top: 2px;
          color: gray;
          font-size: 14px;

          i {
            margin-right: 2px;
          }
        }

        .icon {
          margin: 0 5px;
          width: 35px;
          height: auto;
        }
      }

      .project-body {
        .links {
          margin-top: 20px;

          h3 {
            font-weight: 300;
            color: map-get($colors, primary);
            margin-bottom: 10px;

            i {
              font-size: 14px;
            }
          }

          a {
            text-decoration: none;
            margin-right: 5px;
            white-space: nowrap;

            &::after {
              content: ", ";
            }

            &:last-child {
              &::after {
                content: "";
              }
            }
          }
        }
      }
    }
  }
}
</style>