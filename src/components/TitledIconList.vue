<template>
     <div class="icon-set">
        <h3 class="icon-set-title">{{ title }}</h3>
        <ul>
            <li v-for="icon in iconList" :key='icon.id'>
                <span class="icon-title">{{ icon.title }}</span>
                <img :src="`/assets/icons/${icon.pic}.svg`" :alt="icon.title" @mouseover="hover = true">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        iconList: { type: Array, required: true }
    },
    data() {
        return {
            hover: false
        }
    }
}
</script>

<style scoped>
    .icon-set {
        margin-bottom: 30px;
    }

    .icon-set-title {
        margin-bottom: 15px;
    }

    .icon-set ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .icon-set ul li {
        position: relative;
        width: 33%;
        margin-top: 15px;
    }

    @media screen and (min-width: 768px) {
        .icon-set ul li {
            width: 25%;
        }
    }

    @media screen and (min-width: 1024px) {
        .icon-set ul li {
            width: 16.6%;
        }
    }

    .icon-title {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 10px;
        font-weight: bold;
        opacity: 0;
        transition: ease transform 0.3s, opacity 0.3s;
        -webkit-transition: ease transform 0.3s, opacity 0.3s;
    }

    .icon-set ul li:hover .icon-title {
        opacity: 1;
        transform: translate(-50%, -18px);
    }

    .icon-set img {
        display: block;
        width: 40px;
        margin: 5px auto 15px;
        transition: ease transform 0.15s, filter 0.3s;
        -webkit-transition: ease transform 0.15s, filter 0.3s;
    }
</style>