<template>
  <div id="about-wrapper">
    <div class="about-paragraph">
      <p class="about-title">I am <strong>Brecht Nulens</strong></p>
      <p class="about-punch">"Aspiring <strong>junior web developer</strong> with emphasis on graphic design"</p>
      <p class="about-catch">Focused on <strong>continuous learning and improvement.</strong>
      Spending spare time on Udemy, W3schools and Laracasts.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
  
}

</script>

<style scoped>

  * {
    margin: 0;
    height: 100%;
  }

  #about-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .about-paragraph {
    display: flex;
    flex-wrap: wrap;
    text-align: initial;
    width: 42%;
  }

  .about-title {
    font-size: 26px;
  }

  .about-punch {
    font-size: 38px;
    font-weight: 500;
    margin-top: 2vh;
  }

  .about-catch {
    font-size: 16px;
    width: 22vw;
    margin-top: 1vh;
  }

</style>
