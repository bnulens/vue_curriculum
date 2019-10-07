<template>
    <div>
        <h1>SKILSS</h1>
        <ul v-for="personalSkill in personalSkills" key="personalSkills.id">
            <img class="skillIcon" src="function(getSkillIcon)" alt="personalSkills.title">
        </ul>
    </div>
</template>
    
<script>
import personalSkills from '../assets/skills'

export default {
    name: 'Skill',
    method: {
        getSkillIcon(personalSkill) {
            return require('../assets/icons/${personalSkills.pic}')
        }
    }

}

</script>

<style>

* {
  margin: 0;
  padding: 0;
}



</style>