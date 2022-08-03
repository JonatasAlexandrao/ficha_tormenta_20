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

  let isOpen = false
  $: classOpen = isOpen ? '-open': ''
  function addClassOpen() { isOpen = !isOpen }

  let isDarkMode = false
  $: classMode = isDarkMode ? '-darkMode': ''
  function addClassMode() { isDarkMode = !isDarkMode }
  
</script>

<main class="sheet">
  <div class="container-icon">

    <div class="icon sun {classMode}" on:click={addClassMode}>
      <img src="../icon/light.svg" alt="" use:fetchSvg>
    </div>

    <div class="icon moon {classMode}" on:click={addClassMode}>

      <img src="../icon/dark.svg" alt="" use:fetchSvg>
    </div>

    <div class="icon menu {classOpen}" on:click={addClassOpen}>
      <span></span>
    </div>
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
  @import "./style-svg.scss"
</style>