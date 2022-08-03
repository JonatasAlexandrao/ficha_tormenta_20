<script>
  export let classOpen  

  let page = document.querySelector('html')

  let boxesBackgroundColor = getComputedStyle(page).getPropertyValue('--color-fill')
  let boxLineColor = getComputedStyle(page).getPropertyValue('--color-stroke')
  let sheetBackgroundColor = getComputedStyle(page).getPropertyValue('--color-background')
  let inputColorSelected = getComputedStyle(page).getPropertyValue('--color-input-selected')

  function chooseColors() {
    page.style.setProperty('--color-fill', boxesBackgroundColor)
    page.style.setProperty('--color-stroke', boxLineColor)
    page.style.setProperty('--color-background', sheetBackgroundColor)
    page.style.setProperty('--color-input-selected', inputColorSelected)

    

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

  <div class="color-box">
    <label for="inputColorSelected">Contorno da Seleção:</label>
    <input type="color" name="inputColorSelected" id="inputColorSelected" bind:value={inputColorSelected}>
  </div>

  <button on:click={chooseColors}>Trocar</button>

</section>

<style lang="scss">
  @import "./style.scss";
</style>