<template>
    <header>
        <ul class="navbar">
            <li v-for="(item, i) in navItems" :key="i">
                <a :href="`#${item}`">{{ item }}</a>
            </li>
            <li>
                <a href="mailto:brechtnulens@gmail.com">contact</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navItems: [ 'about', 'skills', 'experience' ]
        }
    }
}

</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar {
        display: flex;
        position: relative;
        max-width: 800px;
        font-weight: 800;
        z-index: 5;
    }

    li {
        display: flex;
        justify-content: space-between;
        margin: 0% 6%;
    }

    a {
        display: block;
        font-size: 0.8rem;
        color: white;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {

        .navbar {
            top: 18vh;
            left: 10vw;
        }

    }

    @media screen and (min-width: 320px) and (max-width: 768px) {

        .navbar {
            display: flex;
            position: absolute;
            top: 2vh;
        }
    
        a {
            font-size: 0.8rem;
        }

    }

</style>