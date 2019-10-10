<template>
    <div class="header">
        <ul class="navbar">
            <li>about</li>
            <li>skills</li>
            <li>academics</li>
            <li>experience</li>
            <li>contact</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Header'
}

</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    font-weight: 500;
}

ul {
    list-style: none;
} 

li {
    margin-left: 2vw;
}
</style>