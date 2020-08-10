<template>
  <div class="skill-chart-container">
    <SkillPolar/>
  </div>
</template>

<script>
    import SkillPolar from './SkillPolar';

    export default {
        components: {
            SkillPolar
        },
    }
</script>

<style scoped lang="scss">
    .skill-chart-container {
        margin: 24px auto;
    }
</style>