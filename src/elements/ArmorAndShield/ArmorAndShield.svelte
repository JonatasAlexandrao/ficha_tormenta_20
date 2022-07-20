<script>
  import { VAR_armor, VAR_shield } from '../../store'
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  //export let armorInfo = ''
</script>

<div class="armor_and_shield">
  <div class="columns -name">
    <span class="title -name">Armadura & Escudo</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_1" caracterLength="12" bind:value={$VAR_armor.name} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_2" caracterLength="12" bind:value={$VAR_shield.name} />
    </div>
  </div>

  <div class="columns -defense_num">
    <span class="title">Defesa</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_1" caracterLength="2" bind:value={$VAR_armor.bonus} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_2" caracterLength="2" bind:value={$VAR_shield.bonus} />
    </div>
  </div>

  <div class="columns -penalty_num">
    <span class="title">Penalidade</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_1" caracterLength="2" bind:value={$VAR_armor.penalty} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_2" caracterLength="2" bind:value={$VAR_shield.penalty} />
    </div>
  </div>

  <img src="../img/Defesa/armor_and_shield.svg" alt="" use:fetchSvg>
  
</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>