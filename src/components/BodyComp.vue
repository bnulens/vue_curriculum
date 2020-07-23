<template>
    <main class="container">
        <AboutComp/>
        <CoderComp/>
        <SkillComp/>
        <ExperienceComp/>
    </main>
</template>
    
<script>
import AboutComp from './sections/AboutComp'
import SkillComp from './sections/SkillComp'
import ExperienceComp from './sections/ExperienceComp'
import CoderComp from './sections/CoderComp'

export default {
    components: { AboutComp, SkillComp, ExperienceComp, CoderComp }
}
</script>
<style scoped>
    .container {
        position: relative;
    }

    @media screen and (min-width: 768px) {
    }
</style>