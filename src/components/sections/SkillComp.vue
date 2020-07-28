<template>
    <section id="skills">
        <h2>Skills</h2>
        <SkillChart/>
        <TitledIconList title="As a developer" :iconList="devSkillIcons"/>
        <TitledIconList title="As a designer" :iconList="designerSkillIcons"/>
    </section>
</template>

<script>
import TitledIconList from '../skills/TitledIconList'
import SkillChart from '../skills/SkillChart'
import devSkillIcons from '../../assets/devskillicons'
import designerSkillIcons from '../../assets/designerskills'

export default {
    components: { TitledIconList, SkillChart },
    data() {
        return {
            devSkillIcons,
            designerSkillIcons
        }
    }
}
</script>