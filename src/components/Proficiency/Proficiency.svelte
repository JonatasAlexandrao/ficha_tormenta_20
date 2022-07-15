<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { info__proficiency } from '../../store'
</script>

<div class="proficiency">
  <label class="txt_label -proficiency" for="proficiency">Proficiências</label>
  <textarea class="txt_textarea" id="proficiency" cols="30" rows="10" autocomplete="off" bind:value={$info__proficiency}></textarea>
  <img src="../img/Defesa/Proficiencias.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .proficiency {
    position: relative;
    width: 100%;

    display: grid;
    align-items: center;
    padding: .2rem .7rem 1rem;
    font-size: 1.2rem;
    
    z-index: 1;

    .txt_textarea {
      width: 100%;
      height: 100%;
      padding: .5rem;

      resize: none;
      font-size: 1.2rem;

      background-color: $color-input; 
    }
  }


</style>