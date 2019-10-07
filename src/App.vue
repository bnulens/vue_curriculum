<template>
  <div id="app">
    <Header/>
    <Body>
      <Skill/>
    </Body>
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue'
import Body from './components/BodyComp.vue'

export default {
  name: 'app',
  components: { Body, Header }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
