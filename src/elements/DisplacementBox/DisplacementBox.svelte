<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_displacement } from '../../store'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
</script>

<div class="displacement_box">
  <label class="txt_label -displacement" for="displacement">Deslocamento</label>
  <InputDefault className="displacement" nameInput="displacement" caracterLength="5" bind:value={$VAR_displacement} />
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
    
    z-index: 0;
  }
</style>