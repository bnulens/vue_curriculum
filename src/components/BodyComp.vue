<template>
    <main class="container">
        <HeroComp/>
        <AboutComp/>
        <CoderComp/>
        <SkillComp/>
        <ExperienceComp/>
    </main>
</template>
    
<script>
import HeroComp from './sections/HeroComp'
import AboutComp from './sections/AboutComp'
import SkillComp from './sections/SkillComp'
import ExperienceComp from './sections/ExperienceComp'
import CoderComp from './sections/CoderComp'

export default {
    components: { HeroComp, AboutComp, SkillComp, ExperienceComp, CoderComp }
}
</script>
<style scoped>
    .container {
        position: relative;
    }

    .hero {
        max-width: none;
        align-self: center;
        width: auto;
        margin-bottom: 56px;
    }

    @media screen and (min-width: 768px) {
    }
</style>