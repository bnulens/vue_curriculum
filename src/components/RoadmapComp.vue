<template>
    <div id="road-map-wrapper">
        <canvas id="road-map" height="400px" width="792px"></canvas>
    </div>
</template>

<script>
import roadMap from '../assets/roadMap'
import academics from '../assets/academics'
import workexperience from '../assets/workexperience'

export default {
    name: 'RoadMapComp'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#road-map-wrapper {
    width: 100vw;
    background-color: rgb(255, 247, 234);
}

#road-map {
    border: 1px dotted rgb(169, 169, 169);
    margin: 20px 0px;
}
</style>