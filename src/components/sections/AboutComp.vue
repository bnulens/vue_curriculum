<template>
  <section id="about">
    <h2 class="sr-only">About</h2>
    <div id="about-wrapper">
      <div class="about-intro">
        <p class="about-title">Hello, I am <strong>Brecht Nulens</strong></p>
        <p class="about-punch">"An aspiring <strong>junior web developer</strong> with emphasis on graphic design"</p>
        <p class="about-catch">... <strong>moved</strong> by conceptualization and visual representation
        through <strong> project based studies.</strong> 
        </p>
        <p class="about-time">estimated reading time ~ (x) min.</p>
      </div>
    </div>
    <div class="about-card">
      <div class="about-card-body">
          <h4>A little bit more about myself...</h4>
          <p class="about-card-content">Focused on <strong>continuous learning and improvement.</strong>
          Spending spare time on Udemy, W3schools and Laracasts. 
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}

</script>

<style scoped >

  #about {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;

  }
  /* INTRO */
  .about-title {
    font-size: 2rem;
  }

  .about-punch {
    font-size: 3rem;
    margin-top: 10%;
    text-align: initial;
  }

  .about-catch {
    font-size: 1rem;
    margin-top: 5%;
  }

  .about-time {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    opacity: 0.5;
  }
  /* CARD */
  .about-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -30vh;
  }

  .about-card-body{
    padding: 20px;
    text-align: justify;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    .about-title {
      font-size: 2rem;
    }

    .about-punch {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 768px){
    
    .about-title {
      font-size: 1rem;
    }

    .about-punch {
      font-size: 2rem;
    }

    .about-catch {
      font-size: 0.8rem;
    }

    .about-time {
      font-size: 0.5rem;
    }
  }
</style>
