<template>
    <ul class="xp-list">
        <li v-for="item in list" :key="item.id">
            <p class="year">{{ item.year }}</p>
            <p class="title">{{ item.title }}</p>
            <p class="organisation">{{ item.organisation }}</p>
            <p class="location">{{ item.location }}</p>
            <p class="status" v-if="item.status">{{ item.status }}</p>
        </li>
    </ul> 
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
        padding: 15px;
        border: 1px solid black;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    li {
        margin-bottom: 10px;
    }

    .year {
        font-weight: bold;
    }

    .title {

    }

    .organisation {

    }

    .location {

    }

    .status {

    }

</style>