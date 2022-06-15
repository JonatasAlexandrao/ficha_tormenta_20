<script>
  import HealthMana from "./elements/HealthMana.svelte";
</script>

<div class="image_and_points">
  <div class="img"></div>
  <HealthMana text="vida" subClass="health" />
  <HealthMana text="mana" subClass="mana" />
</div>


<style lang="scss">

  .image_and_points {
    display: grid;
    grid-template-areas: 
    'img points_health'
    'img points_mana'
    ;
    grid-template-columns: 35% 65%;

    .img {
      grid-area: img;

      width: 85%;
      height: 85%;
      border: 4px solid #000;

      justify-self: center;
      align-self: center;
    }
  }

</style>