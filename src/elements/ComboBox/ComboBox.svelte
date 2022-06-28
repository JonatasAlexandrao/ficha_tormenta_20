<script>
  export let className = ''
  export let idName = ''
  export let list = ['For','Des','Con', 'Int', 'Sab', 'Car']
  export let textDefault = ''

  function clickComboBox() {
    const listBox = this.nextElementSibling
    //const bottomToClose = this.parentElement.previousElementSibling
    listBox.classList.toggle('-active')
    //bottomToClose.classList.toggle('-active')
  
  }

  function selected() {
    const text = this.textContent
    const listBox = this.parentElement
    const input = listBox.parentElement.firstChild

    listBox.classList.remove('-active')
    input.value = text
  }

</script>
<div class="container_combo_box">
  <input class="combo_box -{className}" id={idName} type="text" value={textDefault} on:click={clickComboBox} readonly>

  <ul class="listBox">
    {#each list as item}
      <li on:click={selected}>{item}</li>
    {/each}
  </ul>
</div>



<style lang="scss">
  @import "./style.scss";
</style>