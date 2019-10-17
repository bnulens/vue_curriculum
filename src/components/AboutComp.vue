<template>
  <div id="about-module">
    <div id="about-wrapper">
      <div class="about-intro">
        <p class="about-title">I am <strong>Brecht Nulens</strong></p>
        <p class="about-punch">"Aspiring <strong>junior web developer</strong> with emphasis on graphic design"</p>
        <p class="about-catch">... <strong>moved</strong> by conceptualization and visual representation
      through <strong> project based studies.</strong> 
      </p>
      </div>
    </div>
    <div class="about-paragraph">
      <p class="about-paragraph-content">Focused on <strong>continuous learning and improvement.</strong>
        Spending spare time on Udemy, W3schools and Laracasts.
      </p>
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

  #about-module {
    width: 90%;
  }

  #about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  /* INTRO p */
  .about-intro {
    display: flex;
    flex-wrap: wrap;
    text-align: initial;
    width: 42%;
  }

  .about-title {
    font-size: 32px;
  }

  .about-punch {
    font-size: 42px;
    font-weight: 500;
    margin-top: 2vh;
  }

  .about-catch {
    font-size: 18px;
    width: 28vw;
    margin-top: 1vh;
  }

  /* Paragraph P */
  .about-paragraph {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 60px 0px;
  }
</style>
