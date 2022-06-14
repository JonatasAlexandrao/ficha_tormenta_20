<script>
  import HealthMana from "./elements/HealthMana.svelte";
</script>

<div class="image-and-points">
  <div class="img"></div>
  <HealthMana />
  <HealthMana />
</div>


<style lang="scss">

  .image-and-points {
    display: grid;
    grid-template-areas: 
    'img points_health'
    'img points_mana'
    ;
    grid-template-columns: 35% 65%;

    .img {
      grid-area: img;
    }
  }

</style>