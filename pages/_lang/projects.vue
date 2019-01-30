<template>
  <div class="projects">


    <!-- <div class="projects-list">
      <div class="switch-view">
        <button @click="disableGridView" :class="{ active: !grid }">
          <i class="fas fa-list"></i>
        </button>

        <button @click="enableGridView" :class="{ active: grid }">
          <i class="fas fa-th"></i>
        </button>
      </div>
      <div v-for="project in projects" :key="project.key" :class="projectSingleClass">
        {{project.title}}
      </div>
    </div> -->

    <div class="switch-view">
      <button @click="disableGridView" :class="{ active: !grid }">
        <i class="fas fa-list"></i>
      </button>

      <button @click="enableGridView" :class="{ active: grid }">
        <i class="fas fa-th"></i>
      </button>
    </div>


    <!-- School projects -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("projects.school.title")}}</h1>
      </header>

      <div class="project-list">
        <div :class="gridClass">
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
  { key: "jada", title: "JaDa", date: "2015" },
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
      projects,
      grid: false
    }
  },
  computed: {
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
    }
  }
}
</style>