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
            navItems: [ 'skills', 'experience' ]
        }
    }
}

</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        padding-top: 24px;
    }

    li {
        display: flex;
        justify-content: space-between;
        margin: 0% 6%;
    }

    a {
        text-decoration: none;
        color: white;
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