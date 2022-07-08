<script>
  import { intTotal } from '../../store'
  import Attribute from '../../elements/Attribute/Attribute.svelte'
</script>

<div class="container_attributes">
  <Attribute name="for" />
  <Attribute name="des" />
  <Attribute name="con" />
  <Attribute name="int" bind:value={$intTotal} />
  <Attribute name="sab" />
  <Attribute name="car" />
</div>

<style lang="scss">

  .container_attributes {
    width: 100%;
    display: flex;
    
  }

</style>