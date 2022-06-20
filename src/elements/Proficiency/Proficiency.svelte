<script>
  import { fetchSvg } from '../../functionSVG.js'
</script>

<div class="proficiency">
  <label class="txt_label -proficiency" for="proficiency">Proficiências</label>
  <textarea class="txt_textarea" id="proficiency" cols="30" rows="10" autocomplete="off"></textarea>
  <img src="../img/Defesa/Proficiencias.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .proficiency {
    position: relative;
    width: 100%;

    display: grid;
    align-items: center;
    //grid-template-rows: 20% 80%;

    padding: .2rem .7rem 1rem;
    font-size: 1.2rem;
    
    z-index: 1;
    
    .txt_label {
      text-align: center;
    }
    .txt_textarea {
      width: 100%;
      height: 100%;
      font-size: 1.8rem;
      resize: none;
      font-size: 1.2rem;    
    }
  }


</style>