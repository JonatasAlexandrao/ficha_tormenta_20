<script>
  import { VAR_attributesTotal, VAR_attributesModifier } from '../../store'
  import Attribute from '../../elements/Attribute/Attribute.svelte'

  //console.log($attributesModifier)

</script>

<div class="container_attributes">
  {#each $VAR_attributesTotal as $attribute, index}
    <Attribute name={$attribute.name} bind:value={$attribute.value} modifier={$VAR_attributesModifier[index].value} />
  {/each}
</div>

<style lang="scss">

  .container_attributes {
    width: 100%;
    display: flex;
    
  }

</style>