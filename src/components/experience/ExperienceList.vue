<template>
    <div class="xp-wrap">
        <ul class="xp-list">
            <li v-for="item in list" :key="item.id">
                <span class="year">{{ item.year }}</span>
                <span class="title">{{ item.title }}</span>
                <span class="organisation">{{ item.organisation }}</span>
                <span class="location">{{ item.location }}</span>
                <span class="status" v-if="item.status">{{ item.status }}</span>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        padding: 25px;
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    li {
        margin: 20px 0px;
        padding: 10px;
        border-radius: 10px;
        z-index: 3;
        background-image: linear-gradient(to left, transparent, transparent 50%, rgb(0, 255, 153) 50%,rgb(0, 255, 153));
        background-position: 100% 0;
        background-size: 200% 100%;
        transition: ease all 0.8s;
    }

    li > p {
        display: block;
        z-index: 10;
    }

    li:hover {
        background-position: 0 0;
        color:rgb(32, 29, 46);
    }

    li:hover > span {
        color: white;
        transition: color 1s;
    }

    li:hover > p {
        color: rgb(75, 75, 75);
    }

    .xp-list {
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
    }

    .xp-wrap {
        -webkit-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
        -moz-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
        box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
    }

    .year {
        display: block;
        position: absolute;
        font-size: 32px;
        color: rgb(0, 255, 153);
        padding: 12px 48px;
        right: 10px;
        font-weight: bold;
    }

    .title {
        position: relative;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 100;
    }

    .organisation {
        position: relative;
        margin-left: 20px;
        margin-top: 5px;
    }

    .location {
        position: relative;
        margin-left: 20px;
    }

    .status {
        position: relative;
        margin-left: 20px;
    }

    /* KEYFRAMES for LIST ANIMATION */
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
</style>