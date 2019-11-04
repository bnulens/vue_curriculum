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
import academics from '../../assets/academics'
import workExperience from '../../assets/workExperience'
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
    }

    .tab {
        width: 50%;
        text-align: center;
        padding: 15px 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        cursor: pointer;
    }

    .tab.selected {
        border-bottom: none;
        -webkit-box-shadow: 0px -15px 48px -1px rgba(219,219,219,0.57);
        -moz-box-shadow: 0px -15px 48px -1px rgba(219,219,219,0.57);
        box-shadow: 0px -15px 48px -1px rgba(219,219,219,0.57);
        color: white;
        background-color: rgb(75, 75, 75);
        transition: background-color ease-in 0.2s;
    }
</style>