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
        <!-- Enable the RoadMapComp by uncommenting following line: -->
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
        margin-right: 60px;
    }

    #dev-skill-set {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100px;
        margin: 50px 0px 15px 0px;
    }

    #dev-skill-icons {
        display: block;
        justify-content: center;
        width: 55px;
    }

    #dev-skill-icons span {
        display: flex;
        position: relative;
        justify-content: center;
        font-size: 14px;
        opacity: 0;
        transition: ease transform 0.3s, opacity 0.3s;
        -webkit-transition: ease transform 0.3s, opacity 0.3s;
    }

    #dev-skill-icons:hover span {
        opacity: 1;
        transform: translate(0px, -18px);
    }

    .dev-skill {
        display: block;
        width: 40px;
        margin: 0px 8px;
        transition: ease transform 0.3s, filter 0.3s;
    }

    .dev-skill:hover {
        /* display: block; */
        transform: scale(1.2,1.2);
        filter: drop-shadow(4px 4px 4px gray);
    }
    
    /* DESIGNER STYLING */
    .designer-title {
        margin-right: 60px;
    }

    #designer-skill-set {
        display: flex;
        justify-content: center;
        margin: 60px 0px 15px 0px;
        width: 100%;
    }
    
    #designer-skill-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
    }

    .designer-skill {
        display: block;
        width: 40px;
        margin: 8px 8px;
        transition: ease transform 0.15s, filter 0.3s;
        -webkit-transition: ease transform 0.15s, filter 0.3s;
    }

    .designer-skill:hover {
        display: block;
        filter: drop-shadow(4px 4px 4px gray);
        transform: translate(0px, -22px);
    }
</style>