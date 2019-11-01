<template>
    <main id="body-wrapper">
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

#body-wrapper {
    display:flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    margin: 50px 10px 15px;
}

</style>