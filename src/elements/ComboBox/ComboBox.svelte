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
    const listBox = this.nextElementSibling
    listBox.classList.toggle('-active')  
  }

  function selected() {
    const text = this.textContent
    textInput = text

    if(returnValue) {
      list.forEach(element => {
        element.description === text ? returnValue(element) : ''
      });
    }
    
    
  }

  function closedComboBox() {
    const listBox = this.nextElementSibling
    listBox.classList.remove('-active')
  }

</script>
<div class="container_combo_box" >
  <input class="combo_box -{className}" id={idName} type="text" value={textInput} on:click={clickComboBox} readonly on:blur={closedComboBox}>

  <ul class="listBox">
    {#each list as item}
      <li on:mousedown={selected}>{item.description}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "./style.scss";
</style>