<script>
  
  import { fetchSvg } from '../../functionSVG'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

</script>

<div class="container_txt -character">

  <InputDefault className='character' nameInput='character' caracterLength='25' value={'$attributesTotal[0].value'} />
  <label class="txt_label -character" for="character">Personagem</label>

  <img src="../img/Caixas/Personagem.svg" alt="" use:fetchSvg>
  

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>