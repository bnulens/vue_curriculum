<template>
    <header>
        <div class="header-wrapper">
            <div class="ref-icons">
                <a href="https://github.com/bnulens" target="_blank" rel="norefferer noopener">
                    <img class="ref-icon" src="/assets/icons/github.svg" alt="GitHub">
                </a>
                <a href="https://www.linkedin.com/in/brecht-nulens/" target="_blank" rel="norefferer noopener">
                    <img class="ref-icon" src="/assets/icons/linkedin2.svg" alt="LinkedIn">
                </a>
                <a href="mailto:brechtnulens@gmail.com" target="_blank" rel="norefferer noopener">
                    <img class="ref-icon" src="/assets/icons/email.svg" alt="Gmail">
                </a>
            </div>
            <ul class="navbar">
                <li v-for="(item, i) in navItems" :key="i">
                    <a :href="`#${item}`">{{ item }}</a>
                </li>
                <li>
                    <a href="mailto:brechtnulens@gmail.com" rel="norefferer noopener">contact</a>
                </li>
            </ul>
        </div>
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
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 24px;
    }

    ul {
        display: flex;
    }

    li {
        margin-right: 24px;
    }

    a {
        font-size: 18px;
        font-weight: 100;
        text-decoration: none;
        color: black;
    }

    .ref-icon {
        width: 28px;
        margin-left: 20px;
        filter: grayscale(1);
        transition: filter 0.3s;
    }


    @media screen and (min-width: 768px){
        .ref-icon{
            width: 28px;
            margin-left: 20px;
            filter: invert(0);
            transition: ease filter 0.3s;
        }

        .ref-icon:hover {
            filter: invert(1);
        }
    }
</style>