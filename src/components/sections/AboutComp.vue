<template>
  <section id="about">
    <h1 class="sr-only">About</h1>
    <div class="about-wrapper">
      <!-- <img src="../../../public/images/unsplash-about-image.jpg" alt="hero" class="about-hero"> -->
      <img src="../../../public/images/unsplash-shot-image.jpg" alt="hero" class="about-hero">
      <div class="about-hero-title">
        <!-- <span>junior</span>
        <span>web</span>
        <span>developer</span> -->
        <span>LOOKING</span>
        <span>FOR</span>
        <span>A SHOT</span>
      </div>
    </div>
    <div class="about-card">
      <div class="about-card-body">
          <h3>A little bit more about myself...</h3>
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
  }

  .about-wrapper {
    object-fit: fill;
    display: block;
  }

  /* INTRO */
  .about-hero {
    position: relative;
    display: block;
    max-width: 100%;
    height: 100%;
  }

  .about-hero-title {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 200px;
    left: 80px;
    padding: 24px;
    color: black;
    font-size: 64px;
    font-weight: 100;
  }

  .about-hero-title span {
    box-sizing: border-box;
    padding: 8px;
    width: auto;
    color: white;
  }

  /* CARD */
  .about-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about-card-body{
    text-align: justify;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
  }

  @media screen and (min-width: 320px) and (max-width: 768px){
  }
</style>
