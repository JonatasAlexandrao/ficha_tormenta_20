<script>
  import { fetchSvg } from '../../functionSVG.js'
</script>

<div class="experience_box">
  <label class="txt_label -experience" for="experience">Pontos de Experiência</label>
  <input class="txt_input" id="experience" type="text" > 
  <img src="../img/Defesa/caixa-experiencia.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .experience_box {

    position: relative;
    width: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 55% 45%;

    padding: .4rem;
    font-size: 1.2rem;
    
    z-index: 1;
    
  }


  
</style>