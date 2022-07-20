<script>
  import HealthMana from "../../elements/HealthMana/HealthMana.svelte";
  import { VAR_health, VAR_mana } from '../../store'

</script>

<div class="image_and_points">
  <div class="img"></div>
  <HealthMana text="vida" subClass="health" bind:valuePoints={$VAR_health.points} bind:valueHistoric={$VAR_health.historic} />
  <HealthMana text="mana" subClass="mana" bind:valuePoints={$VAR_mana.points} bind:valueHistoric={$VAR_mana.historic}/>
</div>


<style lang="scss">
  @import "./style.scss";
</style>