<script>
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let value = ''
  export let valueLevel = ''
  export let text = ''
  export let nameInput = ''
  export let caracterLength

</script>

<div class="container_txt -{nameInput}">
  <img src="../img/Caixas/lateral-padrao-E.svg" alt="" use:fetchSvg>
  <img src="../img/Caixas/lateral-padrao-D.svg" alt="" use:fetchSvg>

  <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>
  <InputDefault nameInput={nameInput} caracterLength={caracterLength} bind:value={value} bind:valueLevel={valueLevel} />
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>