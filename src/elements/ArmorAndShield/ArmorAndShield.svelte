<script>
  import { fetchSvg } from '../../functionSVG.js'
</script>

<div class="armor_and_shield">
  <div class="columns -name">
    <span class="title -name">Armadura & Escudo</span>
    <input class="txt_input -armor_and_shield" id="name_armor_and_shield_1" type="text" >
    <input class="txt_input -armor_and_shield" id="name_armor_and_shield_2" type="text" >
  </div>

  <div class="columns -defense_num">
    <span class="title">Defesa</span>
    <input class="txt_input -armor_and_shield" id="defense_num_armor_and_shield_1" type="text" >
    <input class="txt_input -armor_and_shield" id="defense_num_armor_and_shield_2" type="text" >
  </div>

  <div class="columns -penalty_num">
    <span class="title">Penalidade</span>
    <input class="txt_input -armor_and_shield" id="penalty_num_armor_and_shield_1" type="text" >
    <input class="txt_input -armor_and_shield" id="penalty_num_armor_and_shield_2" type="text" >
  </div>

  <img src="../img/Defesa/armor_and_shield.svg" alt="" use:fetchSvg>
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>