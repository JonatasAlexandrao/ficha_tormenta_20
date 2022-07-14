<script>
  import DefenseCalc from "../../elements/DefenseCalc/DefenseCalc.svelte"
  import ArmorAndShield from '../../elements/ArmorAndShield/ArmorAndShield.svelte'
  import ExperienceBox from "../../elements/ExperienceBox/ExperienceBox.svelte";

  // let defense = {
  //   numDefense: 10,
  //   modifierAttribute: 'Des',
  //   numModifier: 0,
  //   armorBonus: 0,
  //   shieldBonus: 0,
  //   otherBonus: 0,
  //   armorPenalty: 0
  // }

  // let armorAndShield = [
  //   { name: '', numDefense: 5, penalty: '' },
  //   { name: '', numDefense: 2, penalty: '' }
  // ]

  //defense.armorBonus = armorAndShield[0].numDefense + armorAndShield[1].numDefense
  //console.log(defense)
  //console.log($attributesModifier)

  let experience = ''

</script>

  <div class="container_defense_and_experience">
    <DefenseCalc modifierDefault="Des" />
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