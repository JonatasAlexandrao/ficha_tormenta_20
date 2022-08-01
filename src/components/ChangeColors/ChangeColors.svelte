<script>
  import { fetchSvg } from '../../functionSVG.js'

  let page = document.querySelector('html')

  let boxesBackgroundColor = getComputedStyle(page).getPropertyValue('--color-fill')
  let boxLineColor = getComputedStyle(page).getPropertyValue('--color-stroke')
  let sheetBackgroundColor = getComputedStyle(page).getPropertyValue('--color-background')

  console.log(boxesBackgroundColor, boxLineColor, sheetBackgroundColor)

  function aaa() {
    //console.log('inputColor', boxesBackgroundColor)
    //let t = getComputedStyle(page).getPropertyValue('--color-alert')
    page.style.setProperty('--color-fill', boxesBackgroundColor)
    page.style.setProperty('--color-stroke', boxLineColor)
    page.style.setProperty('--color-background', sheetBackgroundColor)

    console.log(this)
    if(this.id === 'color-box-default') {
      let colorDefault = getComputedStyle(page).getPropertyValue('--color-fill-default')
      page.style.setProperty('--color-fill', colorDefault)
    }
  }

  let isOpen = true
  $: classOpen = isOpen ? '-open': ''
  function addClassOpen() { isOpen = !isOpen }
    

</script>
<div class="change-colors {classOpen}">
  
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
 

  
  <div class="container-color-box">
    <label for="sheetBackgroundColor">Fundo da Ficha:</label>
    <input class="color-box" type="color" name="sheetBackgroundColor" id="sheetBackgroundColor" bind:value={sheetBackgroundColor}>
  </div>

  <div class="container-color-box">
    <label for="boxesBackgroundColor">Fundo das Caixas:</label>
    <input class="color-box" type="color" name="boxesBackgroundColor" id="boxesBackgroundColor" bind:value={boxesBackgroundColor}>
  </div>

  <div class="container-color-box">
    <label for="boxLineColor">Linha das Caixas:</label>
    <input class="color-box" type="color" name="boxLineColor" id="boxLineColor" bind:value={boxLineColor}>
  </div>

  <button on:click={aaa}>Trocar</button>

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>