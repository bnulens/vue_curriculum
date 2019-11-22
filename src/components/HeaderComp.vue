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
        position: absolute;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        margin-left: 11vw;
        z-index: 5;
    }

    .navbar {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        font-weight: 800;
    }

    li {
        display: flex;
        justify-content: space-between;
        margin: 0% 2%;
        
    }

    a {
        display: block;
        font-size: 1.2rem;
        color: #2c3e50;
        padding: 10px 5px;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
    
        a {
            font-size: 0.8rem;
        }
    }

</style>