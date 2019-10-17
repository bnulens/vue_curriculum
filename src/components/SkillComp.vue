<template>
    <div id="skill-wrapper">
        <div id="dev-skill-set">
            <h3 class="dev-title">as a developer</h3>
            <ul id="dev-skill-icons" v-for="devSkillIcon in devSkillIcons" :key='devSkillIcon.id'>
                <li>
                    <span>{{ devSkillIcon.title }}</span>
                    <img class="dev-skill" :src="`/assets/icons/${devSkillIcon.pic}.svg`" :alt="devSkillIcon.title" @mouseover="hover = true">
                </li>
            </ul>
        </div>
        <div id="designer-skill-set">
            <h3 class="designer-title">as a designer</h3>
            <ul id="designer-skill-icons" v-for="designerSkillIcon in designerSkillIcons" :key='designerSkillIcon.id'>
                <li>
                    <img class="designer-skill" :src="`/assets/icons/${designerSkillIcon.pic}.svg`" :alt="designerSkillIcon.title" @mouseover="hover = true">
                </li>
            </ul>
        </div>
        <!-- <app-road-map></app-road-map> -->
    </div>
</template>

<script>
import RoadmapComp from './RoadmapComp'
import devSkillIcons from '../assets/devskillicons'
import designerSkillIcons from '../assets/designerskills'

export default {
    name: 'Skill',
    components: {
        'app-road-map':RoadmapComp
    },
    data() {
        return {
            hover: false,
            devSkillIcons,
            designerSkillIcons
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;        
    }

    #skill-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    /* DEVOPS STYLING */
    .dev-title {
        margin-right: 80px;
    }

    #dev-skill-set {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100px;
        margin: 60px 0px 15px 0px;
    }

    #dev-skill-icons {
        display: block;
        justify-content: center;
        width: 55px;
    }

    #dev-skill-icons span {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: ease transform 0.3s, opacity 0.3s;
        -webkit-transition: ease transform 0.3s, opacity 0.3s;
    }

    #dev-skill-icons:hover span {
        opacity: 1;
        transform: translate(0px, -10px);
    }

    .dev-skill {
        display: block;
        width: 40px;
        margin: 5px 5px;
    }
    
    /* DESIGNER STYLING */
    .designer-title {
        margin-right: 80px;
    }

    #designer-skill-set {
        display: flex;
        justify-content: center;
        margin: 60px 0px 15px 0px;
        width: 100%;
    }
    
    #designer-skill-icons {
        display: flex;
        justify-content: center;
        width: 55px;
    }

    .designer-skill {
        display: block;
        width: 40px;
        margin: 5px 5px;
        transition: ease transform 0.15s;
        -webkit-transition: ease transform 0.15s;
    }

    .designer-skill:hover {
        transform: translate(0px, -22px);
    }
</style>