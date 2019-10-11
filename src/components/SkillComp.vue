<template>
    <div id="dev-skill-set">
        <ul id="dev-skill-icons" v-for="devSkillIcon in devSkillIcons" :key='devSkillIcon.id'>
            <li>
                <img class="dev-skill" :src="`/assets/icons/${devSkillIcon.pic}.svg`" :alt="devSkillIcon.title" @mouseover="hover = true">
            </li>
        </ul>
    </div>
</template>

<script>
import devSkillIcons from '../assets/devskillicons'
export default {
    name: 'Skill',
    data() {
        return {
            hover: false,
            devSkillIcons
        }
    },
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #dev-skill-set {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0px 15px 0px;
    }

    #dev-skill-icons {
        display: flex;
    }

    .dev-skill {
        width: 40px;
        margin: 0px 10px 
    }

    .dev-skill:hover {
        border-radius: 88%;
    }
    ul {
        list-style: none;        
    }
</style>