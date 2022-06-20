<script>
  import { fetchSvg } from '../../functionSVG.js'
</script>

<div class="size_box">
  <label class="txt_label -size" for="size">Tamanho</label>
  <input class="txt_input" id="size" type="text" >
  <span class="text_modifiers">+5/-5</span>
  <img src="../img/Defesa/tamanho.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .size_box {
    position: relative;
    width: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 30% 35% 35%;

    padding: .4rem;    
    z-index: 1;
    
    .txt_label {
      text-align: center;
    }
    .txt_input {
      width: 100%;
      height: 75%;
      //text-align: center;
      font-size: 1.4rem;
    }
    .text_modifiers {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.6rem;
    }
  }


</style>