<script>
  export let className = ''
  export let idName = ''
  export let textDefault = ''
  export let returnValue = ''

  let textInput = textDefault || ''

  export let list = [
    {description:'For'},
    {description:'Des'},
    {description:'Con'},
    {description:'Int'},
    {description:'Sab'},
    {description:'Car'}
  ]

  function clickComboBox() {
    const container = this.parentElement
    const listBox = this.nextElementSibling
    const bottomToClose = container.previousElementSibling

    container.classList.toggle('-active')
    listBox.classList.toggle('-active')
    bottomToClose.classList.toggle('-active') 
  
  }

  function selected() {
    const text = this.textContent
    const listBox = this.parentElement
    const container = listBox.parentElement
    const bottomToClose = listBox.parentElement.previousElementSibling

    listBox.classList.remove('-active')
    container.classList.remove('-active')
    bottomToClose.classList.remove('-active')
    textInput = text

    if(returnValue) {
      list.forEach(element => {
        element.description === text ? returnValue(element) : ''
      });
    }
    
    
  }

  function closedComboBox() {
    const listBox = this.nextElementSibling.lastChild
    const container = listBox.parentElement
    listBox.classList.remove('-active')
    container.classList.remove('-active')
    this.classList.remove('-active')
  }

</script>
<div class="bottom_to_close" on:click={closedComboBox}></div>
<div class="container_combo_box">
  <input class="combo_box -{className}" id={idName} type="text" value={textInput} on:click={clickComboBox} readonly>

  <ul class="listBox">
    {#each list as item}
      <li on:click={selected}>{item.description}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "./style.scss";
</style>