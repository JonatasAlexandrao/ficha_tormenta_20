<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_size } from '../../store'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte'

  let list = [ 
    { name:'Minúsculo', modifier:'+5/-5' }, 
    { name:'Pequeno', modifier: '+2/-2' },
    { name:'Médio', modifier: '0' },
    { name:'Grande', modifier: '-2/+2' },
    { name:'Enorme', modifier: '-5/+5' }, 
    { name:'Colossal', modifier: '-10/+10' }
  ]

  function returnValue(index) {
    $VAR_size.selected = list[index].name
    $VAR_size.modifier = list[index].modifier
  }

</script>

<div class="size_box">
  <label class="txt_label -size" for="size">Tamanho</label>
  <ComboBox className="size" idName="size" list={list} returnValue={returnValue} />

  <span class="text_modifiers">{$VAR_size.modifier}</span>
  <img src="../img/Defesa/tamanho.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";

  .size_box {
    position: relative;
    width: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 30% 35% 35%;

    padding: .4rem;    
    z-index: 2;
    
    .txt_label {
      text-align: center;
    }
    .text_modifiers {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.4rem;
    }
  }


</style>