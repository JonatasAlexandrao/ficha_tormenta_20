<script>
	//export let name;
  import { fetchSvg } from './functionSVG.js'

  import Header from "./components/Header/Header.svelte"
  import ImageAndPoints from "./components/ImageAndPoints/ImageAndPoints.svelte";
  import Attributes from "./components/Attributes/Attributes.svelte";
  import AttackBox from "./components/AttackBox/AttackBox.svelte"
  import OtherInfo from "./components/OtherInfo/OtherInfo.svelte"
  import Equipment from "./components/Equipment/Equipment.svelte";
  import Skills from "./components/Skills/Skills.svelte"
  import ChangeColors from "./components/ChangeColors/ChangeColors.svelte";

  let isOpen = true
  $: classOpen = isOpen ? '-open': ''
  function addClassOpen() { isOpen = !isOpen }
  

</script>

<main class="sheet">
  <div class="container-icon">
    <div class="icon sun">
      <img src="../icon/light.svg" alt="" use:fetchSvg>
    </div>

    <!-- <div class="icon moon">
      <img src="../icon/dark.svg" alt="" use:fetchSvg>
    </div> -->
    <!-- <div class="icon menu">
      <img src="../icon/gear.svg" alt="" use:fetchSvg>
    </div> -->

    <div class="icon menu {classOpen}" on:click={addClassOpen}>
      <span></span>
    </div>
    <!-- <div class="icon close">
      <img src="../icon/close.svg" alt="" use:fetchSvg>
    </div> -->
  </div>
  <ChangeColors classOpen={classOpen} />
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
  @import "./style.scss";
</style>