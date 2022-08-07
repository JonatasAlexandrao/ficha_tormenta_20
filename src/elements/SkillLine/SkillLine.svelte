<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_attributesModifier, VAR_character, VAR_skills, VAR_armorPenalty } from '../../store'
  import ComboBox from '../../elements/ComboBox/ComboBox.svelte' 
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  export let text = ''
  export let attributeDefault = 'For'
  export let num = ''
  export let className = ''

  let checkBox = false
  let indexSelecting = 1
  let returnValue = (selected) => { indexSelecting = selected }

  $: $VAR_skills[num].halfLevel = parseInt($VAR_character.level / 2)
  $: halfLevel = parseInt($VAR_character.level / 2)

  $: attributeValue = $VAR_attributesModifier[indexSelecting].value

  $: trained = checkBox ? 2 : 0

  $VAR_attributesModifier.forEach((item, index) => {
    if(item.name === attributeDefault) { returnValue(index) }
  });

  let others = 0
  $: $VAR_skills[num].others = parseInt(others)

  let havePenalty = $VAR_skills[num].armorPenalty
  $: armorPenaltyValue = havePenalty ? $VAR_armorPenalty : 0

  //let onlyTrained = ($VAR_skills[num].onlyTrained & checkBox) ? '-only_trained' : ''
  let onlyTrained = $VAR_skills[num].onlyTrained
  $: notTrained = onlyTrained & !checkBox ? '-only_trained' : ''
  
  /* ====== TOTAL ====== */
  $: $VAR_skills[num].total = (attributeValue + trained + halfLevel + parseInt(others)) + armorPenaltyValue


</script>

<tr class="skill_line {className}" >
  <td class="skill_line_name"> 
    <input class="check_box {className}" id="check_box_{num}" type="checkbox" bind:checked={checkBox}> 
    <label class="check_label {notTrained}" for="check_box_{num}">{text}</label>  
  </td>
  <td class="skill_line_total">
     {$VAR_skills[num].total} 
     <img src="../img/Pericias/skills_total.svg" alt="" use:fetchSvg>
  </td>
  <td class="skill_line_half_level"> {$VAR_skills[num].halfLevel} </td>
  <td class="skill_line_modifier" > 
    <ComboBox className="skill_modifier" idName="skill_modifier" textDefault={attributeDefault} returnValue={returnValue} />
  </td>
  <td class="skill_line_training"> {trained} </td>
  <td class="skill_line_others"> 
    <InputDefault className="skill_other -{className}" nameInput="skill_other_{num}" bind:value={others} maxlength="3" />
  </td>
</tr>


<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>