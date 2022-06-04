<script>
	//export let name;
</script>

<main class="ficha">
</main>

<style lang="scss">
	@import "./global.scss";

	.ficha {
  width: 100vw;
  max-width: 90rem;
  height: 100vh;

  position: relative;
  padding: 2rem;

  display: grid;
  grid-template-areas: 
    'info-geral info-geral'
    'info-esquerda info-pericias'
  ;
  grid-template-rows: auto 1fr;
  grid-template-columns: 65% 35%;
  
}

.ficha::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-width: 90rem;
  height: 100%;
  z-index: -1;
  opacity: .6;
	//background-image: url("../public/img/Fundos/Fundo-pagina.jpg");
  background-image: url("./Fundo-pagina.jpg");
  //@warnbackground-image: url("./img/Fundos/Fundo-pagina.jpg");
	npbackground-color: aquamarine;
  background-repeat: no-repeat;
  background-size: cover;
}

	
</style>