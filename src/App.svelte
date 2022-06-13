<script>
	//export let name;
  import Header from "./components/Header.svelte";

</script>

<main class="ficha">

  <Header />
  
</main>

<style lang="scss">
	@import "./global.scss";

	.ficha {
  min-width: 80rem;
  max-width: 80rem;
  height: 100vh;

  position: relative;
  padding: 2rem;

  /*display: grid;
  grid-template-areas: 
    'info-geral info-geral'
    'info-esquerda info-pericias'
  ;
  grid-template-rows: auto 1fr;
  grid-template-columns: 65% 35%;*/
  
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

	
</style>