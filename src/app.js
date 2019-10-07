Vue.component('skill-icons', {
    template: '<span class="skill-wrapper><img v-for="skillIcon in skillIcon" :src=getSkillImage(skillIcon) :alt="skillIcons.title"></span>' ,
    data () {
        return {
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        skillIcons: [

            {id: 1, title: 'HTML5', pic: 'html5'},
            {id: 2, title: 'CSS3', pic: 'css3'},
            {id: 3, title: 'Sass', pic: 'sass'},
            {id: 4, title: 'Javascript', pic: 'javascript'},
            {id: 5, title: 'VueJs', pic: 'vue'},
            {id: 6, title: 'PhP', pic: 'php'},
            {id: 7, title: 'PostGreSQL', pic: 'postgres'},
            {id: 8, title: 'GitKraken', pic: 'gitkraken'},
            {id: 9, title: 'VisualStudioCode', pic: 'visualstudiocode'}
        
        ]
    },
})