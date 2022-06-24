<script>
  import { fetchSvg } from '../../functionSVG.js'

  import EquipmentLine from "../../elements/EquipmentLine/EquipmentLine.svelte";

 
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
        <input id="total_tibar" type="text">
      </div>
      <div>
        <label for="total_tibarO">TO:</label>
        <input id="total_tibarO" type="text">
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
  @import "./style-svg.scss";

  @import "../../global.scss";

  .container_equipment {
    position: relative;
    width: 99%;
    
    margin-top: 3rem;
    padding: 0 1rem ;
    background-color: $color-fill;
    border: 2px $color-stroke solid;

    

    z-index: 1;

    .title {
      position: absolute;
      top: -2rem;
      left: 50.5%;
      transform: translateX(-50%);
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: Tormenta20, Arial, sans-serif;
    }

    .header_equipment {
      width: 100%;
      
      display: grid;
      grid-template-columns: 80% 17%;

      font-size: 1.2rem;
    }

    .content_equipment {
      width: 100%;
      height: 25.7rem;
      overflow: hidden;
      overflow-y: auto;
     
    }

    .container_totals {
      width: 100%;
      margin-top: .5rem;
      display: grid;
      grid-template-columns: 20% 20% 52%;
      gap: 3%;

      p:first-child {
          font-size: 1.4rem;
          border-bottom: 2px solid #000;
          padding: .5rem .5rem .5rem 0;

          span {
            font-size: .8rem;
          }
        }
        p:last-child {
          padding-top: .5rem;
        }

        p {
          width: 100%;
          text-align: center;
        }
    }

    .total_money {
      width: 100%;
      div:first-child { margin-bottom: 1rem; }
      div {
        display: grid;
        grid-template-columns: 1fr 90%;
        justify-content: center;
        align-items: center;

        input {
          width: 100%;
          height: 2.3rem;
          font-size: 1.6rem;
          text-align: center;
        }
      }
    }

  }

</style>