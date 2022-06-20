<script>
  import { fetchSvg } from '../../functionSVG'
</script>

<div class="container_txt -character">

  <input class="txt_input -character" id="character" type="text" >
  <label class="txt_label -character" for="character">Personagem</label>

  <img src="../img/Caixas/Personagem.svg" alt="" use:fetchSvg>
  

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>