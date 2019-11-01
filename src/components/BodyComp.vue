<template>
    <main class="container">
        <AboutComp/>
        <SkillComp/>
    </main>
</template>
    
<script>
import AboutComp from './AboutComp'
import SkillComp from './SkillComp'

export default {
    components: { AboutComp, SkillComp }
}
</script>

<style scoped>

* { 
    margin: 0;
    padding: 0;
}

.container {
    display:flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    margin: 50px 10px 15px;
}

@media screen and (min-width: 800px) {
    .container {
        max-width: 800px;
        margin: 50px auto 15px;
    }
}

</style>