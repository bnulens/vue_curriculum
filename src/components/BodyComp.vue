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
        margin: 50px 10px 15px;
    }

    @media screen and (min-width: 768px) {
        .container {
            max-width: 800px;
            margin: 50px auto 15px;
        }
    }
</style>