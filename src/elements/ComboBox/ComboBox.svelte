<script>
  import { VAR_attributesModifier } from '../../store'
  export let className = ''
  export let idName = ''
  export let textDefault = ''
  export let returnValue = ()=>{}
  export let list = $VAR_attributesModifier
 
  let textInput = textDefault || ''

  function clickComboBox() {
    const listBox = this.nextElementSibling
    listBox.classList.toggle('-active')  
  }

  function selected() {
    const text = this.textContent
    textInput = text

    list.forEach((item, index) => {
      if(item.name === text) { returnValue(index) }
    })
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
      <li on:mousedown={selected}>{item.name}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "./style.scss";
</style>