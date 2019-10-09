<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue'
import Body from './components/BodyComp'
import Footer from './components/FooterComp.vue'

export default {
  name: 'app',
  components: { 
    'app-header': Header,
    'app-body': Body,
    'app-footer': Footer
 
  }
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
