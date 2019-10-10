<template>
    <div id="skill-set">
        <ul id="skill-icons" v-for="skillIcon in skillIcons" :key='skillIcon.id'>
            <li>
                <img class="skill" :src="`/assets/icons/${skillIcon.pic}.png`" :alt="skillIcon.title" @mouseover="hover = true">
            </li>
        </ul>
    </div>
</template>

<script>
import skillIcons from '../assets/skillicons'
export default {
    name: 'Skill',
    data() {
        return {
            hover: false,
            skillIcons
        }
    },
    methods:{
        getSkillImage(skillIcon) {
            let path = require(`./../assets/icons/${skillIcon.pic}.png`)
            return path;
        }
    }
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #skill-set {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0px 15px 0px;
    }

    #skill-icons {
        display: flex;
        /* flex-direction: row; */
    }

    .skill {
        width: 60px;
    }

    .skill:hover {
        border-radius: 88%;
        background-color: rgba(0, 255, 145, 0.29);
    }
    ul {
        list-style: none;        
    }
</style>