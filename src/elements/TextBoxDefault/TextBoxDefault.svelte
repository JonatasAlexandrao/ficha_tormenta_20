<script>
  import { fetchSvg } from '../../functionSVG.js'
  export let text = ''
  export let nameInput = ''
  export let type = 'text'
</script>

<div class="container_txt -{nameInput}">
  <img src="../img/Caixas/lateral-padrao-E.svg" alt="" use:fetchSvg>
  <img src="../img/Caixas/lateral-padrao-D.svg" alt="" use:fetchSvg>

  <label class="txt_label -default -{nameInput}" for="{nameInput}">{text}</label>
  <input class="txt_input -default" id="{nameInput}" type="{type}" >

  {#if nameInput === "class-level"}
    <input class="txt_input -level" id="level" type="text" >
  {/if}
  
  
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>