<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { attributesModifier, armor, shield, otherNumDefense, armorPenalty, difficultyClass } from '../../store.js'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let modifierDefault = 'For'

  // ======== Modifier =======================
  let i = 0
  function modifierComboBox(attributeSelected) {
    $attributesModifier.forEach((element, index) => {
      element.name === attributeSelected ? i = index : ''
    })
  }
  modifierComboBox(modifierDefault)

  console.log($difficultyClass)


</script>

<div class="defense_calc">

  <div class="container_defense_value">
    <span class="defense_title">Defesa</span>
    <span class="defense_value">{$difficultyClass}</span>
  </div>
  
  <span class="value_default">=10</span>

  <div class="container_calc">

    <div class="container_top">

      <div class="container -modifier">
        <div class="container_title">
          <span class="modifier_title">Mod. de</span>
          <ComboBox className="modifier" idName="modifier" textDefault={modifierDefault} returnValue={modifierComboBox} />
        </div>
        <span class="value -modifier">{$attributesModifier[i].value}</span>
      </div>

      <div class="container -armor_bonus">
        <span class="armor_bonus_title">Bonus de Armadura</span>
        <span class="value -armor_bonus">{$armor.bonus}</span>
      </div>

      <div class="container -shield_bonus">
        <span class="shield_bonus_title">Bonus de Escudo</span>
        <span class="value -shield_bonus">{$shield.bonus}</span>
      </div>

      <div class="container -others">
        <span class="others_title">Outros</span>
        <div class="container_input_other">
          <InputDefault className="others" nameInput="defense_calc_others" bind:value={$otherNumDefense} />
        </div>
      </div>

    </div>
    

    <div class="container_armor_penalty">
      <span class="armor_penalty">Penalidade de Armadura</span>
      <span class="penalty_value"> {$armorPenalty} </span>
    </div>
    
  </div>


  <img src="../img/Defesa/defense_calc.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>