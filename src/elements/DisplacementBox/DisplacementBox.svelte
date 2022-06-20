<script>
  import { fetchSvg } from '../../functionSVG.js'
</script>

<div class="displacement_box">
  <label class="txt_label -displacement" for="displacement">Deslocamento</label>
  <input class="txt_input" id="displacement" type="text" > 
  <img src="../img/Defesa/deslocamento.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .displacement_box {
    position: relative;
    width: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 55% 45%;

    padding: .4rem;
    font-size: 1.2rem;
    
    z-index: 1;

    .txt_label {
      text-align: center;
    }
    .txt_input {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 1.8rem;
    }
  }
</style>