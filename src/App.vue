<template>
  <div id="app">
    <app-header/>
    <about/>
    <skills/>
    <skill-icons></skill-icons>
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue'
import about from './components/AboutComp.vue'
import Skill from './components/SkillComp'

export default {
  name: 'app',
  components: { 
    'app-header': Header,
    'about': about,
    'skills': Skill
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
