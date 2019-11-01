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

/* Mobile Portrait */
@media screen and (min-width: 0px) and (max-width: 414px){

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 80%;
}

ul {
    list-style: none;
} 

li {
    display: flex;
    justify-content: space-between;
    margin: 0% 2%;
}

}
</style>