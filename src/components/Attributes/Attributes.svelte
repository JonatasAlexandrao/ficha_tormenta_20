<script>
  import { attributesTotal, attributesModifier } from '../../store'
  import Attribute from '../../elements/Attribute/Attribute.svelte'

</script>

<div class="container_attributes">
  {#each $attributesTotal as $attribute, index}
    <Attribute name={$attribute.name} bind:value={$attribute.value} modifier={$attributesModifier[index].value} />
  {/each}
</div>

<style lang="scss">

  .container_attributes {
    width: 100%;
    display: flex;
    
  }

</style>