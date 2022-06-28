<script>
  import { fetchSvg } from '../../functionSVG.js'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte' 

  export let text = ''
  export let attribut = 'For'
  export let num = ''
  export let className = ''

</script>



<tr class="skill_line -{className}">
  <td class="skill_line_name"> 
    <input class="check_box -{className}" id="check_box_{num}" type="checkbox"> 
    <label class="check_label" for="check_box_{num}">{text}</label>  
  </td>
  <td class="skill_line_total">
     10 
     <img src="../img/Pericias/skills_total.svg" alt="" use:fetchSvg>
  </td>
  <td class="skill_line_half_level"> 4 </td>
  <td class="skill_line_modifier"> 
    <ComboBox className="skill_modifier" idName="skill_modifier" textDefault={attribut} />
  </td>
  <td class="skill_line_training"> 2 </td>
  <td class="skill_line_others"> <input class="text_outher -{className}" id="text_outher_{num}" type="text" value="0"></td>
</tr>


<style lang="scss">

  .skill_line {
    height: 3rem;
    font-size: 1.3rem; 

    td:first-child {
      display: flex;
      align-items: center;
    }

    td {
      height: 100%;
      text-align: center;
      border-bottom: rgba(0, 0, 0, .2) 1px solid;

      .text_outher {
        width: 100%;
        height: 90%;
        text-align: inherit;
      }
    }

    .skill_line_name {   
      .check_box { opacity: .8; }
    }

    .skill_line_total {
      position: relative;
      font-size: 1.6rem;
    }

    .skill_line_half_level {
      position: relative;
      &::after {
        content: '=';
        position: absolute;
        left: -.2rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.8rem;
      }
    }

    

    .skill_line_modifier {
      position: relative;
      &::after {
        content: '+';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) translateX(-100%);
        font-size: 1.8rem;
      }
      &::before {
        content: '+';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(100%);
        font-size: 1.8rem;
      }

    }

    :global(.skill_line_modifier .container_combo_box input) {
      width: 80%;
      justify-self: center;
    }

    .skill_line_others {
      position: relative;

      &::after {
        content: '+';
        position: absolute;
        left: -.8rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.8rem;
      }

      input {
        width: 80%;
      }
    }

    


    

    
  }

  :global(.skill_line .skill_line_total > svg) {
    fill: transparent;
    stroke: #000;
    stroke-width: 10px;

    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
  }
</style>