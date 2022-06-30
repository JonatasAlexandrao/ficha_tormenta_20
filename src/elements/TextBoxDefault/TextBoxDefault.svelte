<script>
  import { fetchSvg } from '../../functionSVG.js'
  export let text = ''
  export let nameInput = ''
  export let caracterLength = 8

  let value = ''
  $: fontSize = value.length > caracterLength ? 'small' : `s-${value.length}`

  /*
  jogador = 20
  raça = 12
  origem = 16
  Classe = 18
  divindade = 12
  */

</script>

<div class="container_txt -{nameInput}">
  <img src="../img/Caixas/lateral-padrao-E.svg" alt="" use:fetchSvg>
  <img src="../img/Caixas/lateral-padrao-D.svg" alt="" use:fetchSvg>

  <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>
  <input class="txt_input -default {fontSize}" 
    id={nameInput} 
    bind:value={value}
  >

  {#if nameInput === "class-level"}
    <input class="txt_input -level" id="level" >
  {/if}
  
  
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>