<script>

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

  
  
  //console.log(getComputedStyle(page).getPropertyValue('$color-fill'))

</script>
<div class="change-colors">
  

  <img src="../icon/light.svg" alt="">
  <img src="../icon/dark.svg" alt="">
  <img src="../icon/gear.svg" alt="">
  <img src="../icon/close.svg" alt="">
  <!-- <div class="color-box -default" id="color-box-default" on:click={aaa}>(Default)</div>
  <div class="color-box -dark">(Dark)</div> -->
 
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
  @import "../../global.scss";

  .change-colors {
 
    width: 100%;
    //height: 70vh;

    display: grid;
    grid-template-columns: 25rem;
    grid-template-rows: repeat(3, 3rem) 5rem;
    gap: .5rem;

    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 4rem 2rem;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    font-size: 1.8rem;

    color: rgb(220, 220, 220);
    background-color: rgb(31, 31, 31);
    z-index: 100;

    .color-box {
      width: 100%;
      height: 100%;
      border: .2rem solid #000;

      padding: .1rem;
      background-color: transparent;
      cursor: pointer;
    }

    .container-color-box {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 70% 30%;
      align-items: center;

    }

    button {
      width: 60%;
      height: 70%;
    }
  }

</style>