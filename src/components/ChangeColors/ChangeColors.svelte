<script>

  let backgroundColorBoxes

  function aaa() {
    console.log('inputColor', backgroundColorBoxes)
    
    page.style.setProperty('--color-fill', backgroundColorBoxes)
  }

  let page = document.querySelector('html')
  
  console.log(getComputedStyle(page).getPropertyValue('$color-fill'))

</script>
<div class="change-colors">
  

  <div class="color-boxes -default"></div>
  <div class="color-boxes -dark"></div>
  <input class="color-boxes -input" type="color" name="backgroundColorBoxes" id="backgroundColorBoxes" bind:value={backgroundColorBoxes} on:click={aaa}>


  <button on:click={aaa}>troca</button>

</div>

<style lang="scss">

.change-colors {
  width: 100px;

  display: grid;
  grid-auto-columns: 3rem;
  grid-auto-flow: column;
  gap: .5rem;

  justify-content: center;

  background-color: cadetblue;

  .color-boxes {
    width: 100%;
    height: 100%;
    background-color: brown;
    margin-bottom: .5rem;

  }

  button {
    width: 100%;
    height: 100%;
  }
}

</style>