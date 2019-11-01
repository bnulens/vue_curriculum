<template>
    <section id="skills">
        <TitledIconList title="As a developer" :iconList="devSkillIcons"/>
        <TitledIconList title="As a designer" :iconList="designerSkillIcons"/>
    </section>
</template>

<script>
import TitledIconList from './TitledIconList'
import devSkillIcons from '../assets/devskillicons'
import designerSkillIcons from '../assets/designerskills'

export default {
    components: { TitledIconList },
    data() {
        return {
            devSkillIcons,
            designerSkillIcons
        }
    }
}
</script>