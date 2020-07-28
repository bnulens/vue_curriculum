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
  components: { HeaderComp, BodyComp, FooterComp },
}
</script>

<style global>

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
  }

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  #app {
    max-width: 1080px;
    margin: 0 auto;
    /* font */
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* colors */
    color:  #393b3c;
  }

  a {
    text-decoration: none;
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

  .loader {
    border: 16px solid white;
    border-radius: 50%;
    border-top: 16px solid black;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
