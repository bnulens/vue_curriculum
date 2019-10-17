<template>
  <div id="about-module">
    <div id="about-wrapper">
      <div class="about-intro">
        <p class="about-title">I am <strong>Brecht Nulens</strong></p>
        <p class="about-punch">"Aspiring <strong>junior web developer</strong> with emphasis on graphic design"</p>
        <p class="about-catch">... <strong>moved</strong> by conceptualization and visual representation
        through <strong> project based studies.</strong> 
        </p>
        <p class="about-time">estimated reading time ~3min.</p>
      </div>
    </div>
    <div class="about-paragraph">
      <div class="about-paragraph-body">
          <h4>A little bit more about myself...</h4>
          <p class="about-paragraph-content">Focused on <strong>continuous learning and improvement.</strong>
          Spending spare time on Udemy, W3schools and Laracasts. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam rerum cum similique alias. Quaerat cum ipsam cupiditate soluta ullam est eveniet possimus beatae rem nesciunt! Maiores culpa facilis ad.
          Nisi voluptas quas asperiores natus obcaecati aliquam placeat sit ab. 
        </p>
      </div>
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

  .about-time {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    width: 100%;
    opacity: 0.5;
  }

  /* Paragraph P */
  .about-paragraph {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 80px 0px;
  }

  .about-paragraph-body{
    width: 40%;
    padding: 20px;
    text-align: justify;
    -webkit-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
    -moz-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
    box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
  }

  .about-paragraph-content {
    display: block;
    margin: 20px 0px;
  }
</style>
