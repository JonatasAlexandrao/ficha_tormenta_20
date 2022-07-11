<script>
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let armorInfo = ''
</script>

<div class="armor_and_shield">
  <div class="columns -name">
    <span class="title -name">Armadura & Escudo</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_1" caracterLength="12" bind:value={armorInfo[0].name} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_2" caracterLength="12" bind:value={armorInfo[1].name} />
    </div>
  </div>

  <div class="columns -defense_num">
    <span class="title">Defesa</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_1" caracterLength="2" bind:value={armorInfo[0].numDefense} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_2" caracterLength="2" bind:value={armorInfo[1].numDefense} />
    </div>
  </div>

  <div class="columns -penalty_num">
    <span class="title">Penalidade</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_1" caracterLength="2" bind:value={armorInfo[0].penalty} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_2" caracterLength="2" bind:value={armorInfo[1].penalty} />
    </div>
  </div>

  <img src="../img/Defesa/armor_and_shield.svg" alt="" use:fetchSvg>
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>