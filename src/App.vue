<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <BodyComp></BodyComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import BodyComp from './components/BodyComp'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'app',
  components: { HeaderComp, BodyComp, FooterComp }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

ul {
  list-style: none;
}

#app {
  /* font */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*  */
}
</style>
