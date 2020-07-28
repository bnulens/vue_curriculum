<template>
    <vc-donut
    background="white" foreground="transparent"
    :size="400" unit="px" :thickness="15"
    has-legend legend-placement="right"
    :sections="sections" :total="850"
    :start-angle="0" :auto-adjust-text-size="true"
    @section-click="handleSectionClick"
    >
    <h1>skills</h1>
    </vc-donut>
</template>

<script>
import Vue from 'vue'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);

export default {
    data() {
        return {
            sections: [
                { label: 'HTML', value: 70, color: '#e44d26'},
                { label: 'CSS', value: 70, color: '#0170BA'},
                { label: 'Sass/Scss', value: 75, color: '#CC6899'},
                { label: 'Javascript', value: 65, color: '#F0DB4F'},
                { label: 'NodeJS', value: 55, color: '#A8D577'},
                { label: 'Express', value: 40, color: 'black'},
                { label: 'VueJS', value: 45, color: '#41B883'},
                { label: 'ReactJS', value: 40, color: '#61DAFB'},
                { label: 'Gatsby', value: 60, color: '#744C9E'},
                { label: 'NextJS', value: 35, color: 'grey'},
                { label: 'PostGreSQL', value: 30, color: '#336791'},
                { label: 'MongoDB', value: 45, color: '#7E6E66'},
                { label: 'GitKraken', value: 55, color: '#128379'},
                { label: 'Git', value: 60, color: '#DE4C36'},
                { label: 'VSCode', value: 1, color: '#3083B8'},
                { label: 'Terminal', value: 1, color: 'black'},
            ]
        }
    }
}
</script>

<style scoped lang="scss">

</style>