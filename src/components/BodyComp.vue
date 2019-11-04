<template>
    <main class="container">
        <AboutComp/>
        <SkillComp/>
        <ExperienceComp/>
    </main>
</template>
    
<script>
import AboutComp from './sections/AboutComp'
import SkillComp from './sections/SkillComp'
import ExperienceComp from './sections/ExperienceComp'


export default {
    components: { AboutComp, SkillComp, ExperienceComp }
}
</script>
<style scoped>
.container {
    position: relative;
    margin: 50px 10px 15px;
}

@media screen and (min-width: 800px) {
    .container {
        max-width: 800px;
        margin: 50px auto 15px;
    }
}
</style>