<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_totalWeight, VAR_maxWeight, VAR_totalLifting, VAR_totalTibar, VAR_totalTibarO } from '../../store'

  import EquipmentLine from "../../elements/EquipmentLine/EquipmentLine.svelte";
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

</script>

<div class="container_equipment">
  
  <h3 class="title">Equipamento</h3>

  <div class="header_equipment">
    <span>Item</span>
    <span>Peso (Kg)</span>
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

    <div class="maximum_weight">
      <span>
        <InputDefault nameInput="total_weight" className="total_weight" value={$VAR_totalWeight + 'Kg'} readonly={true} />
        <span>de</span>
        <InputDefault nameInput="max_weight" className="max_weight" value={$VAR_maxWeight + 'Kg'} readonly={true} /> 
      </span>
      
      <label for="total_weight">Carga Máxima (3x Força)</label>
    </div>

    <div class="total_lifting">
      <span>
        <InputDefault nameInput="total_lifting" className="total_lifting" value={$VAR_totalLifting} readonly={true} />
      </span>
      <label for="total_lifting">Levantar (até 10x Força)</label>
    </div>

    <div class="total_money">
      <div>
        <label for="total_tibar">T$:</label>
        <InputDefault className="total_tibar" nameInput="total_tibar" value={$VAR_totalTibar} />
      </div>
      <div>
        <label for="total_tibarO">TO:</label>
        <InputDefault className="total_tibarO" nameInput="total_tibarO" value={$VAR_totalTibarO} />
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