<template>
    <section id="skills">
        <h2>Skills</h2>
        <TitledIconList title="As a developer" :iconList="devSkillIcons"/>
        <TitledIconList title="As a designer" :iconList="designerSkillIcons"/>
    </section>
</template>

<script>
import TitledIconList from '../skills/TitledIconList'
import devSkillIcons from '../../assets/devskillicons'
import designerSkillIcons from '../../assets/designerskills'

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