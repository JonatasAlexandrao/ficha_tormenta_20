<script>
  import { fetchSvg } from '../../functionSVG'
</script>

<div class="container_txt -character">

  <input class="txt_input" id="character" type="text" >
  <label class="txt_label" for="character">Personagem</label>

  <object class="edge_character" 
    data="../img/Caixas/Personagem.svg" 
    aria-label="lateral-E" 
    aria-hidden="true">
  </object>

  <img src="../img/Caixas/Personagem.svg" alt="" use:fetchSvg>
  

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>