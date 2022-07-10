<script>
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let valuePoints = ''
  export let valueHistoric = ''
  export let text = ''
  export let subClass = ''
</script>

<div class="container_health_mana -{subClass}">

  <div class="container_max_points">
    <InputDefault className='max_points' nameInput='points_{subClass}' maxlength='3' caracterLength='2' bind:value={valuePoints} />
  </div>
  <div class="container_historic">
    <InputDefault className='historic' nameInput='_historic_{subClass}' caracterLength='13' bind:value={valueHistoric} />
  </div>

  <span class="title">Pontos de {text}</span>
  <span class="text_box1">Máximos</span>
  <span class="text_box2">Atuais</span>

  <img src="../img/Pontos-de-Vida-e-Mana.svg" alt="" use:fetchSvg>

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>

