<script>
  import { intModifier } from '../../store.js'
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
  export let name = ''
  export let value = ''

</script>

<div class="container_attribute">
  <span class="title">{name}</span>
  <label class="label_attribute" for="attribute_{name}"> {$intModifier} </label>
  <div class="container_input_attribute">
    <InputDefault className="attribute" nameInput="attribute_{name}" maxlength="2" bind:value={value} />
  </div>

  <img src="../img/Status.svg" alt="" use:fetchSvg>

</div>


<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>
