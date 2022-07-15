<script>
  import DefenseCalc from "../../elements/DefenseCalc/DefenseCalc.svelte"
  import ArmorAndShield from '../../elements/ArmorAndShield/ArmorAndShield.svelte'
  import ExperienceBox from "../../elements/ExperienceBox/ExperienceBox.svelte";

  /*let infoDefence = {
    difficultyClass: '',
    attributeModifier: '',
    bonusArmor: '',
    bonusShield: '',
    otherBonus: '',
    penalty: ''
  }

  let infoArmor = {
    armorName: '',
    armorDefense: '',
    armorPenalty:''
  }

  let infoShield = {
    shieldName: '',
    shieldDefense: '',
    shieldPenalty:''
  }*/

  let experience = ''


</script>

  <div class="container_defense_and_experience">
    <DefenseCalc />
    <ArmorAndShield />
    <ExperienceBox bind:value={experience} />
  </div>

<style lang="scss">
  .container_defense_and_experience {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 8rem 7rem 3.2rem;
    align-content: space-between;  
  }
</style>