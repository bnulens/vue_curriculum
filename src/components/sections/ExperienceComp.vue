<template>
    <section id="experience">
        <h2>Experience</h2>
        <div>
            <div class="tabs">
                <div class="tab" :class="{ 'selected': activeTab === 'academics' }" @click="activeTab = 'academics'">Academics</div>
                <div class="tab" :class="{ 'selected': activeTab === 'work' }" @click="activeTab = 'work'">Work</div>
            </div>
            <ExperienceList v-if="activeTab === 'academics'" :list="academics"/>
            <ExperienceList v-if="activeTab === 'work'" :list="workExperience"/>
        </div>
    </section>
</template>

<script>
import academics from '@/assets/academics'
import workExperience from '@/assets/workExperience'
import ExperienceList from '../experience/ExperienceList'

export default {
    components: { ExperienceList },
    data() {
        return {
            academics: [],
            workExperience: [],
            activeTab: 'academics'
        }
    },
    mounted() {
        this.academics = academics.slice().reverse()
        this.workExperience = workExperience.slice().reverse()
    }
}
</script>

<style scoped>
    .tabs {
        display: flex;
        z-index: -5;
    }

    .tab {
        width: 50%;
        text-align: center;
        padding: 15px 10px;
        color: rgb(193, 193, 193);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        cursor: pointer;
    }

    .tab.selected {
        display: block;
        color: white;
        border-bottom: none;
        
        background: -moz-linear-gradient(45deg, #666 0%, #999 100%);
        background: -webkit-linear-gradient(45deg, #666 0%,#999 100%);
        background: linear-gradient(45deg, #666 0%,#999 100%);
    }

    .academics-list-fade-enter-active {
        transition: all .3s ease;
    }
    .academics-list-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .academics-list-fade-enter, .academics-list-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
    
</style>