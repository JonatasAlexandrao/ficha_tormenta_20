<script>
	//export let name;
  import Header from "./components/Header.svelte";
  import ImageAndPoints from "./components/ImageAndPoints.svelte";
  import Attributes from "./components/Attributes.svelte";

</script>

<main class="ficha">

  <Header />

  <div class="content">
    <section class="main-info">
      <ImageAndPoints />
      <Attributes />
    </section>
    <section class="skills"></section>
  </div>
  
</main>

<style lang="scss">
	@import "./global.scss";

.ficha {
  min-width: 80rem;
  max-width: 80rem;
  height: 100vh;

  position: relative;
  padding: 2rem 3rem;
  
}

.ficha::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  min-width: 80rem;
  max-width: 80rem;
  height: 100%;
  z-index: -1;
  opacity: .6;

  background-image: url("../img/Fundos/Fundo-pagina.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  display: grid;
  grid-template-columns: 55% 45%;

}

	
</style>