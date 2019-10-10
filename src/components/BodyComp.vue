<template>
    <div id="body-wrapper">
    <About/>
    <h4>'Skills'</h4>
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

#body-wrapper {
    display:flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    margin: 30px 0px 15px 0px;
}

</style>