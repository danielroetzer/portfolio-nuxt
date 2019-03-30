<template>
  <div class="projects">

    <!-- <div class="switch-view">
      <button @click="disableGridView" :class="{ active: !grid }">
        <i class="fas fa-list"></i>
      </button>

      <button @click="enableGridView" :class="{ active: grid }">
        <i class="fas fa-th"></i>
      </button>
    </div> -->


    <!-- School projects -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("projects.school.title")}}</h1>
      </header>

      <div class="project-list">
        <!-- <div :class="gridClass">
          <div class="project-single">
            <h2>JaDa</h2>
            <div>lakdjf kfoieb ,.adfie </div>
          </div>
        </div>

        <div :class="gridClass">
          <div class="project-single">
            <h2>JaDa</h2>
            <div>lakdjf kfoieb ,.adfie </div>
          </div>
        </div> -->
        <div v-for="project in projects" :key="project.key" class="w-full">
          <div class="project-single">
            <div class="project-head">
              <header>
                <h2 class="title">{{ $t("projects."+ project.key +".title") }}</h2>
                <div class="subtitle">
                  <i class="fas fa-book"></i>
                  {{ $t("projects."+ project.key +".subtitle") }}
                </div>
              </header>

              <div>
                <img class="icon" :src="project.icon" alt="Icon">
              </div>
            </div>

            <div class="project-body">
              {{ $t("projects."+ project.key +".content") }}

              <div class="links">
                <h3>
                  Links
                  <i class="fas fa-external-link-square-alt"></i>
                </h3>
                <a href="https://gitlab.com/daniel.roetzer/jada" target="_blank">
                  <i class="fab fa-gitlab"></i>
                  GitLab
                </a>

                <a href="https://jada-template.netlify.com/" target="_blank">
                  <i class="fas fa-globe-europe"></i>
                  Homepage
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="w-full md:w-1/2">
          <div class="project-single">
            <div class="project-head">
              <header>
                <h2 class="title">JaDa</h2>
                <div class="subtitle">
                  <i class="fas fa-book"></i>
                  HTML, JavaScript, LESS, Grunt
                </div>
              </header>

              <div>
                <!-- <img class="icon" src="~assets/img/projects/jada.png" alt="Icon" title="Jada"> -->
              </div>
            </div>

            <div class="project-body">
              ljalkdjföl kdjfölakd löakdjfafhiruqpkn apvnpainan na naüo a äoib arkabälg balk ablalr lk l alg l<br>abl bapeib apbapoba aüp aowb aüpgb üaoä lnö 

              <div class="links">
                <h3>
                  Links
                  <i class="fas fa-external-link-square-alt"></i>
                </h3>
                <a href="https://gitlab.com/daniel.roetzer/jada" target="_blank">
                  <i class="fab fa-gitlab"></i>
                  GitLab
                </a>

                <a href="https://jada-template.netlify.com/" target="_blank">
                  <i class="fas fa-globe-europe"></i>
                  Homepage
                </a>
              </div>
            </div>
          </div>
        </div>



        <div class="project-row">
          <div class="project-container">
            <h2>Test Project</h2>
          </div>

          <div class="project-logo">
            <img class="icon" src="/img/projects/jada.png" alt="Icon">
          </div>
        </div>

        <div class="project-row">
          <div class="project-container">
            <h2>Test Project</h2>
          </div>

          <div class="project-logo">
            <img class="icon" src="/img/projects/jada.png" alt="Icon">
          </div>
        </div>
      </div>
    </section>

    <!-- Work projects -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("projects.work.title")}}</h1>
      </header>
    </section>
  </div>
</template>



<script>
const projects = [
  { key: "jada", title: "JaDa", subtitle: "HTML, ...", date: "2015", content: "adfadf", links: [] },
  { key: "rtvs", title: "Real Time Voting System", date: "2016/2017" },
  { key: "hf", title: "hello friends", date: "2018" }
];

// import projects from "~assets/data/projects.json";

// var enableGrid = false;

// if(process.client) {
//   console.log(window.innerWidth);

//   enableGrid = (window.innerWidth >= 992) ? true : false;
// }

export default {
  data() {
    return {
      grid: false
    }
  },
  computed: {
    projects: function() {
      return [
        { key: "jada", title: this.$t("projects.jada.title"), subtitle: this.$t("projects.jada.subtitle"), date: "2015", icon: "/img/projects/jada.png", content: this.$t("projects.jada.content"), gitlab: "https://gitlab.com/daniel.roetzer/jada", website: "https://jada-template.netlify.com/" },
        { key: "rtvs", title: this.$t("projects.rtvs.title"), subtitle: this.$t("projects.rtvs.subtitle"), date: "2015", icon: "/img/projects/jada.png", content: this.$t("projects.rtvs.content"), gitlab: "https://gitlab.com/daniel.roetzer/jada", website: "https://jada-template.netlify.com/" }
      ]
    },
    gridClass: function() {
      return {
        "w-full": !this.grid,
        "w-1/2": this.grid
      }
    }
  },
  methods: {
    enableGridView: function() {
      this.grid = true;
    },
    disableGridView: function() {
      this.grid = false;
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
        }

        .icon {
          margin: 5px 0;
          width: 30px;
          min-width: 30px;
          height: auto;
        }
      }

      .project-body {
        .links {
          margin-top: 10px;

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


    .project-row {
      display: flex;
      flex-direction: row;

    }
  }
}
</style>