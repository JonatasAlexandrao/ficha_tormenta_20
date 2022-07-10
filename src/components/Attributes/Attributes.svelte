<script>
  import { attributesTotal, attributesModifier } from '../../store'
  import Attribute from '../../elements/Attribute/Attribute.svelte'

  function getInfoAttribute() {
    
    let modifiers = []
    let attributeInfo = []

    $attributesModifier.forEach((element, index) => {
      modifiers[index] = element.value
    });

    $attributesTotal.forEach((element, index) => {
      attributeInfo[index] = {
        name: element.name,
        total: element.value,
        modifier: modifiers[index]
      }
    });
  }

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