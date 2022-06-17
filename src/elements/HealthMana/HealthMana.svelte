<script>
  import { fetchSvg } from '../../functionSVG.js'
  export let text = ''
  export let subClass = ''
</script>

<div class="container_health_mana -{subClass}">

  <input class="input_max_points" type="text">
  <input class="input_historic" type="text">

  <span class="title">Pontos de {text}</span>
  <span class="text_box1">Máximos</span>
  <span class="text_box2">Atuais</span>

  <img src="../img/Pontos-de-Vida-e-Mana.svg" alt="" use:fetchSvg>

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>

