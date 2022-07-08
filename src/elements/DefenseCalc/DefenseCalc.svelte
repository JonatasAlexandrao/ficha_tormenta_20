<script>
  import { fetchSvg } from '../../functionSVG.js'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
</script>

<div class="defense_calc">

  <div class="container_defense_value">
    <span class="defense_title">Defesa</span>
    <span class="defense_value">15</span>
  </div>
  
  <span class="value_default">=10</span>

  <div class="container_calc">

    <div class="container_top">

      <div class="container -modifier">
        <div class="container_title">
          <span class="modifier_title">Mod. de</span>
          <ComboBox className="modifier" idName="modifier" textDefault="Des" />
        </div>
        <span class="value -modifier">5</span>
      </div>

      <div class="container -armor_bonus">
        <span class="armor_bonus_title">Bonus de Armadura</span>
        <span class="value -armor_bonus">5</span>
      </div>

      <div class="container -shield_bonus">
        <span class="shield_bonus_title">Bonus de Escudo</span>
        <span class="value -shield_bonus">3</span>
      </div>

      <div class="container -others">
        <span class="others_title">Outros</span>
        <div class="container_input_other">
          <InputDefault className="others" nameInput="defense_calc_others" value="0" />
        </div>

        <!-- <input class="value -others" id="defense_calc_others" type="text" value="0">  -->
      </div>

    </div>
    

    <div class="container_armor_penalty">
      <span class="armor_penalty">Penalidade de Armadura</span>
      <span class="penalty_value"> -5 </span>
    </div>
    
  </div>


  <img src="../img/Defesa/defense_calc.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>