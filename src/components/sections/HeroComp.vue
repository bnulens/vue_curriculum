<template>
  <section id="hero">
    <h1 class="sr-only">Hero</h1>
    <div class="hero-wrapper">
      <!-- <img src="../../../public/images/unsplash-hero-image.jpg" alt="hero" class="hero-image"> -->
      <img src="../../../public/images/unsplash-shot-image.jpg" alt="hero" class="hero-image">
      <div class="hero-title">
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

  #hero {
    display: flex;
    flex-wrap: wrap;
  }

  .hero-wrapper {
    position: relative;
    display: block;
    object-fit: contain;
  }

  /* INTRO */
  .hero-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: none;
  }

  .hero-title {
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

  .hero-title span {
    box-sizing: border-box;
    padding: 8px;
    width: auto;
    color: white;
  }

  /* CARD */
  .hero-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-card-body{
    text-align: justify;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
  }

  @media screen and (min-width: 320px) and (max-width: 768px){
  }
</style>
