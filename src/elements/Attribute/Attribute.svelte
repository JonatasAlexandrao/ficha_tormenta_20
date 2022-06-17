<script>
  import { fetchSvg } from '../../functionSVG.js'
  export let text = ''
  
</script>

<div class="container_attribute">
  <span class="title">{text}</span>
  <label class="label_attribute" for="attribute_{text}">0</label>
  <input class="input_attribute" id="attribute_{text}" type="text">

  <img src="../img/Status.svg" alt="" use:fetchSvg>

</div>


<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>
