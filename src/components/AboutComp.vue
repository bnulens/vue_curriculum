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
          Spending spare time on Udemy, W3schools and Laracasts. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam rerum cum similique alias. Quaerat cum ipsam cupiditate soluta ullam est eveniet possimus beatae rem nesciunt! Maiores culpa facilis ad.
          Nisi voluptas quas asperiores natus obcaecati aliquam placeat sit ab. 
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
  /* INTRO p */
  .about-title {
    font-size: 1rem;
  }

  .about-punch {
    font-size: 1.5rem;
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

  /* Paragraph */
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

</style>
