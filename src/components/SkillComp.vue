<template>
    <div id="skill-set">
        <ul id="skill-icons" v-for="skillIcon in skillIcons" :key='skillIcon.id'>
            <li>
                <img class="skill" v-bind:src='getSkillImage(skillIcon)' v-bind:alt="skillIcon.title" @mouseover="hover = true">
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
            skillIcons: [
            {id: 1, title: 'HTML5', pic: 'html5'},
            {id: 2, title: 'CSS3', pic: 'css3'},
            {id: 3, title: 'Sass', pic: 'sass'},
            {id: 4, title: 'Javascript', pic: 'javascript'},
            {id: 5, title: 'VueJs', pic: 'vue'},
            {id: 6, title: 'PhP', pic: 'php'},
            {id: 7, title: 'PostGreSQL', pic: 'postgres'},
            {id: 8, title: 'GitKraken', pic: 'gitkraken'},
            {id: 9, title: 'VisualStudioCode', pic: 'visualstudiocode'}
            ],
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

    #skill:hover {
        border-radius: 88%;
        background-color: rgba(0, 255, 145, 0.29);
    }
    ul {
        list-style: none;        
    }
</style>