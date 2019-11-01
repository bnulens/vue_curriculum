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
            navItems: [ 'about', 'skills', 'academics', 'experience' ]
        }
    }
}

</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 80%;
}

li {
    display: flex;
    justify-content: space-between;
    margin: 0% 2%;
}
</style>