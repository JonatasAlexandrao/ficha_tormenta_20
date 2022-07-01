<script>
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
  export let text = ''
  
</script>

<div class="container_attribute">
  <span class="title">{text}</span>
  <label class="label_attribute" for="attribute_{text}">0</label>
  <div class="container_input_attribute">
    <InputDefault className="attribute" nameInput="attribute_{text}" maxlength="2" />
  </div>

  <img src="../img/Status.svg" alt="" use:fetchSvg>

</div>


<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>
