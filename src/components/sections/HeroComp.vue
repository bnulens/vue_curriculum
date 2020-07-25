<template>
  <section id="about">
    <h1 class="sr-only">Hero</h1>
    <div class="about-wrapper">
      <!-- <img src="../../../public/images/unsplash-about-image.jpg" alt="hero" class="about-hero"> -->
      <img src="../../../public/images/unsplash-shot-image.jpg" alt="hero" class="about-hero">
      <div class="about-hero-title">
        <span>LINING</span>
        <span>UP</span>
        <span>A SHOT</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  return: {
  }
}
</script>

<style scoped >

  #about {
    display: flex;
    flex-wrap: wrap;
  }

  .about-wrapper {
    position: relative;
    display: block;
    object-fit: contain;
  }

  /* INTRO */
  .about-hero {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: none;
  }

  .about-hero-title {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20%;
    left: 5%;
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
