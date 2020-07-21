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
        margin-right: 24px;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>