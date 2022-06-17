<script>
  import DefenseCalc from "../../elements/DefenseCalc/DefenseCalc.svelte"
  import ArmorAndShield from '../../elements/ArmorAndShield/ArmorAndShield.svelte'
  import ExperienceBox from "../../elements/ExperienceBox/ExperienceBox.svelte";
  import Proficiency from "../../elements/Proficiency/Proficiency.svelte"
  import SizeBox from "../../elements/SizeBox/SizeBox.svelte"
  import DisplacementBox from "../../elements/DisplacementBox/DisplacementBox.svelte"
</script>

<div class="container_other_info">
  <div class="container_defense_other">
    <DefenseCalc />
    <ArmorAndShield />
    <ExperienceBox />
  </div>
  <div class="container_proficiencies_other">
    <Proficiency />
    <SizeBox />
    <DisplacementBox />
  </div>

</div>


<style lang="scss">

  .container_other_info {
    width: 100%;

    margin-bottom: 1rem;

    height: 250px;
    background-color: rgba(42, 134, 165, 0.5);
    display: grid;
    grid-template-columns: 55% 45%;

    .container_defense_other {
      width: 100%;
      height: 100%;
      background-color: cadetblue;
     
    }
    .container_proficiencies_other {
      width: 100%;
      height: 100%;
      background-color: rgb(95, 160, 101);
    }
  }

</style>