<script>
  export let classOpen  

  let page = document.querySelector('html')

  let boxesBackgroundColor = getComputedStyle(page).getPropertyValue('--color-fill')
  let boxLineColor = getComputedStyle(page).getPropertyValue('--color-stroke')
  let sheetBackgroundColor = getComputedStyle(page).getPropertyValue('--color-background')

  function chooseColors() {
    page.style.setProperty('--color-fill', boxesBackgroundColor)
    page.style.setProperty('--color-stroke', boxLineColor)
    page.style.setProperty('--color-background', sheetBackgroundColor)

    if(this.id === 'color-box-default') {
      let colorDefault = getComputedStyle(page).getPropertyValue('--color-fill-default')
      page.style.setProperty('--color-fill', colorDefault)
    }
  }  

</script>

<section class="change-colors {classOpen}">
 
  <div class="color-box">
    <label for="sheetBackgroundColor">Fundo da Ficha:</label>
    <input type="color" name="sheetBackgroundColor" id="sheetBackgroundColor" bind:value={sheetBackgroundColor}>
  </div>

  <div class="color-box">
    <label for="boxesBackgroundColor">Fundo das Caixas:</label>
    <input type="color" name="boxesBackgroundColor" id="boxesBackgroundColor" bind:value={boxesBackgroundColor}>
  </div>

  <div class="color-box">
    <label for="boxLineColor">Linha das Caixas:</label>
    <input type="color" name="boxLineColor" id="boxLineColor" bind:value={boxLineColor}>
  </div>

  <button on:click={chooseColors}>Trocar</button>

</section>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>