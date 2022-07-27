<script>
	//export let name;
  import Header from "./components/Header/Header.svelte"
  import ImageAndPoints from "./components/ImageAndPoints/ImageAndPoints.svelte";
  import Attributes from "./components/Attributes/Attributes.svelte";
  import AttackBox from "./components/AttackBox/AttackBox.svelte"
  import OtherInfo from "./components/OtherInfo/OtherInfo.svelte"
  import Equipment from "./components/Equipment/Equipment.svelte";
  import Skills from "./components/Skills/Skills.svelte"

  let tt = 20
  $: teste = 'rgb(172, 0, 0)'

  function aaa() {
    tt+= 20
    console.log(tt)
    console.log(teste)
    console.log(inputColor.value)
    
    page.style.setProperty('--teste', inputColor.value)
  }

  let page = document.querySelector('html')
  
  console.log(getComputedStyle(page).getPropertyValue('--teste'))

  let inputColor
  

</script>

<main class="ficha">

  <!-- <input type="color" name="" id=""> -->
  <button style="background-color:white;background-color:hsl({teste})" on:click={aaa}>troca</button>
  <input type="color" name="" id="" bind:this={inputColor}>

  <Header />

  <div class="content">
    <section class="main-info">
      <ImageAndPoints />
      <Attributes />
      <AttackBox />
      <OtherInfo />
      <Equipment />
    </section>
    <section class="skills">
      <Skills />
    </section>
  </div>

  <footer>

  </footer>

</main>

<style lang="scss">
	@import "./global.scss";

.ficha {
  min-width: 80rem;
  max-width: 80rem;
  height: 100%;

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
  gap: .5rem;

}

.skills {
  position: relative;
  width: 100%;
  height: 100%;
}

footer {
  width: 100%;
  height: 5rem;
}


</style>