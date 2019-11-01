<template>
    <div>
        <TitledIconList title="As a developer" :iconList="devSkillIcons"/>
        <TitledIconList title="As a designer" :iconList="designerSkillIcons"/>
        <ExperienceComp/>
    </div>
</template>

<script>
import ExperienceComp from './ExperienceComp'
import TitledIconList from './TitledIconList'
import devSkillIcons from '../assets/devskillicons'
import designerSkillIcons from '../assets/designerskills'

export default {
    components: { ExperienceComp, TitledIconList },
    data() {
        return {
            devSkillIcons,
            designerSkillIcons
        }
    }
}
</script>