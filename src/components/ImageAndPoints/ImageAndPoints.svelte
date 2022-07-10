<script>
  import HealthMana from "../../elements/HealthMana/HealthMana.svelte";

  let healthMana = {
    healthPoint: '',
    healthHistoric: '',
    manaPoint: '',
    manaHistoric: '',
  }

</script>

<div class="image_and_points">
  <div class="img"></div>
  <HealthMana text="vida" subClass="health" bind:valuePoints={healthMana.healthPoint} bind:valueHistoric={healthMana.healthHistoric} />
  <HealthMana text="mana" subClass="mana" bind:valuePoints={healthMana.manaPoint} bind:valueHistoric={healthMana.manaHistoric}/>
</div>


<style lang="scss">
  @import "./style.scss";
</style>