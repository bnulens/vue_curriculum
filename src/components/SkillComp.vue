<template>
    <div class="skill-set">
        <ul id="skill-icons" v-for="skillIcon in skillIcons" :key='skillIcons.id'>
            <li>
                <img class="skill" src="getSkillImage(skillIcon)" alt="skill-icon">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data () {
        return {
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
            ]
        }
    },
    methods:{
        getSkillImage(skillIcon) {
           return require (`./../assets/icons/${skillIcon.pic}.png`) 
        }
    }
}

</script>

<style>
    * {
        margin: 0;
    }
</style>