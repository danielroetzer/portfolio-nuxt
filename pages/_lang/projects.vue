<template>
  <div class="projects">


    <div class="projects-list">
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
    </div>
  </div>
</template>



<script>
const projects = [
  { key: "jada", title: "JaDa", date: "2015" },
  { key: "rtvs", title: "Real Time Voting System", date: "2016/2017" },
  { key: "hf", title: "hello friends", date: "2018" }
];
// import projects from "~assets/data/projects.json";

export default {
  data() {
    return {
      projects,
      grid: true,
    }
  },
  computed: {
    projectSingleClass: function() {
      return {
        "w-full": !this.grid,
        "w-1/2": this.grid,
        "project-single": true
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
  .projects-list {
    display: flex;
    flex-wrap: wrap;

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
  }
}
</style>