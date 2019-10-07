<template>
  <div id="wrapper">
    <h1>"mooo"</h1>
    <Skill/> 
  </div>
</template>

<script>
import personalSkills from '../assets/skills'
import { Skill } from "./SkillComp.vue";

export default {
  name: 'Body', 
  components: { Skill }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  * {
    margin: 0;
    height: 100%;
  }
  h1 {
    font-size: 56px;
    border: 1px solid blue;
  }

</style>
