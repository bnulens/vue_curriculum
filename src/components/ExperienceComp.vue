<template>
    <section id="academics">
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
import academics from '../assets/academics'
import workExperience from '../assets/workExperience'
import ExperienceList from './experience/ExperienceList'

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
    h2 {
        text-align: center;
    }

    .tabs {
        display: flex;
    }

    .tab {
        width: 50%;
        text-align: center;
        padding: 5px 10px;
        border-bottom: 1px solid black;
        cursor: pointer;
    }

    .tab.selected {
        border: 1px solid black;
        border-bottom: none;
    }
</style>