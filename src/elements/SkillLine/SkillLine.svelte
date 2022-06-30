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
  @import "./style.scss";
</style>