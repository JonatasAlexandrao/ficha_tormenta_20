<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_attributesModifier, VAR_armor, VAR_shield, VAR_otherNumDefense, VAR_armorPenalty } from '../../store.js'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let modifierDefault = 'Des'
  let index = 1
  let returnValue = (selected) => { index = selected }

  $: valueModifier = isNumber($VAR_attributesModifier[index].value)
  $: bonus = isNumber($VAR_armor.bonus) + isNumber($VAR_shield.bonus)
  $: other = isNumber($VAR_otherNumDefense)
  $: difficultyClass = (10 + (valueModifier + bonus + other))

  function isNumber(num) { 
    return num ? parseInt(num) : 0
  }
 
</script>

<div class="defense_calc">

  <div class="container_defense_value">
    <span class="defense_title">Defesa</span>
    <span class="defense_value">{difficultyClass}</span>
  </div>
  
  <span class="value_default">=10</span>

  <div class="container_calc">

    <div class="container_top">

      <div class="container -modifier">
        <div class="container_title">
          <span class="modifier_title">Mod. de</span>
          <ComboBox className="modifier" idName="modifier" textDefault={modifierDefault} returnValue={returnValue}/>
        </div>
        <span class="value -modifier">{$VAR_attributesModifier[index].value}</span>
      </div>

      <div class="container -armor_bonus">
        <span class="armor_bonus_title">Bonus de Armadura</span>
        <span class="value -armor_bonus">{$VAR_armor.bonus}</span>
      </div>

      <div class="container -shield_bonus">
        <span class="shield_bonus_title">Bonus de Escudo</span>
        <span class="value -shield_bonus">{$VAR_shield.bonus}</span>
      </div>

      <div class="container -others">
        <span class="others_title">Outros</span>
        <div class="container_input_other">
          <InputDefault className="others" nameInput="defense_calc_others" bind:value={$VAR_otherNumDefense} />
        </div>
      </div>

    </div>
    

    <div class="container_armor_penalty">
      <span class="armor_penalty">Penalidade de Armadura</span>
      <span class="penalty_value"> {$VAR_armorPenalty} </span>
    </div>
    
  </div>


  <img src="../img/Defesa/defense_calc.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>