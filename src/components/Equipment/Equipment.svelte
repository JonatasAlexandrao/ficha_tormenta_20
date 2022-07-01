<script>
  import { fetchSvg } from '../../functionSVG.js'

  import EquipmentLine from "../../elements/EquipmentLine/EquipmentLine.svelte";
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

 
</script>

<div class="container_equipment">
  
  <span class="title">Equipamento</span>

  <div class="header_equipment">
    <span>Item</span>
    <span>Peso</span>
  </div>

  <div class="content_equipment">
    <EquipmentLine num=1 />
    <EquipmentLine num=2 />
    <EquipmentLine num=3 />
    <EquipmentLine num=4 />
    <EquipmentLine num=5 />
    <EquipmentLine num=6 />
    <EquipmentLine num=7 />
    <EquipmentLine num=8 />
    <EquipmentLine num=9 />
    <EquipmentLine num=10 />
    <EquipmentLine num=11 />
    <EquipmentLine num=12 />
    <EquipmentLine num=13 />
    <EquipmentLine num=14 />
    <EquipmentLine num=15 />
  </div>
  
  
  <div class="container_totals">

    <div class="maximun_weight">
      <p>10.00 <span>de</span>  30</p>
      <p>Carga Máxima (3x Força)</p>
    </div>

    <div class="lifting">
      <p>100</p>
      <p>Levantar (até 10x Força)</p>
    </div>

    <div class="total_money">
      <div>
        <label for="total_tibar">T$:</label>
        <InputDefault className="total_tibar" nameInput="total_tibar" />
      </div>
      <div>
        <label for="total_tibarO">TO:</label>
        <InputDefault className="total_tibarO" nameInput="total_tibarO" />
      </div>
    </div>

  </div>

  <div class="equipment_top">
    <img src="../img/Equipamento/equipment-top.svg" alt="" use:fetchSvg>
  </div>
  <div class="equipment_bottom">
    <img src="../img/Equipamento/equipment-bottom.svg" alt="" use:fetchSvg>
  </div> 

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>