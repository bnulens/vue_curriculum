<template>
  <section id="about">
    <h2 class="sr-only">About</h2>
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

<style scoped>

  /* INTRO */
  .about-title {
    font-size: 1rem;
  }

  .about-punch {
    font-size: 2.5rem;
    margin-top: 10%;
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
    margin: 80px 0px;
  }

  .about-card-body{
    padding: 20px;
    text-align: justify;
    -webkit-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
    -moz-box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
    box-shadow: 5px 10px 24px 3px rgba(219,219,219,0.57);
  }

  @media screen and (min-width: 800px){
    .about-title {
      font-size: 2rem;
    }

    .about-punch {
      font-size: 3.5rem;
    }

    .about-catch {
      font-size: 1.5rem;
    }

    .about-time {
      font-size: 1rem;
    }
  }
</style>
