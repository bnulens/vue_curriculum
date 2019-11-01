<template>
    <div id="body-wrapper">
        <AboutComp/>
        <SkillComp/>
    </div>
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
    margin: 30px 0px 15px 0px;
}

</style>