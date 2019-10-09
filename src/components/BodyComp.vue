<template>
    <div class="body-wrapper">
    <h4>Body</h4>
        <Skill/>
    </div>
</template>
    
<script>
import AboutComp from './AboutComp'
import SkillComp from './SkillComp'
import skillicons from '../assets/skillicons.js'

export default {
    name: 'Body',
    components: {
        'About': AboutComp,
        'Skill': SkillComp
    },
    data(){
        return {
            skillicons
        }
    },
    method: {}
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}



</style>