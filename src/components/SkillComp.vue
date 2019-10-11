<template>
    <div id="dev-skill-set">
        <ul id="dev-skill-icons" v-for="skillIcon in skillIcons" :key='skillIcon.id'>
            <li>
                <img class="dev-skill" :src="`/assets/icons/${skillIcon.pic}.svg`" :alt="skillIcon.title" @mouseover="hover = true">
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
        width: 60px;
        margin: 0px 10px 
    }

    .dev-skill:hover {
        border-radius: 88%;
    }
    ul {
        list-style: none;        
    }
</style>