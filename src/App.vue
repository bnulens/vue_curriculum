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

*:focus {
  outline: none;
}

html {
  scroll-behavior: smooth;
}

#app {
  /* font */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*  */
}

a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

ul {
  list-style: none;
}

h2 {
  margin-bottom: 15px;
}

section {
  margin-bottom: 80px;
}

.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
</style>
