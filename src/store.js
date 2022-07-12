import { writable, derived } from 'svelte/store';

export const attributesTotal = writable([
    {name:'For', value: 10},
    {name:'Des', value: 10},
    {name:'Con', value: 10},
    {name:'Int', value: 10},
    {name:'Sab', value: 10},
    {name:'Car', value: 10}
])

export const attributesModifier = derived(attributesTotal, ($attributesTotal) => {
  let response = []
  
  $attributesTotal.forEach(($attribute, index) => {
    if(isNaN($attribute.value)) {
      response[index] = { name:$attribute.name, value:0 }
    }
    else {
      response[index] = { name:$attribute.name, value:Math.trunc(($attribute.value - 10) / 2) }
    }
  });

  return response
})

/*export const defenseInfo = writable ({
  numDefense: 10,
  modifierAttribute: 'Des',
  numModifier: 0,
  armorBonus: 0,
  shieldBonus: 0,
  otherBonus: 0,
  armorPenalty: 0
})
*/

export const armor = writable({
  name: '', 
  bonus: 0, 
  penalty: 0
})

export const shield = writable({
  name: '', 
  bonus: 0, 
  penalty: 0
})

export const otherNumDefense = writable(0)

/*Penalidade de armadura afeta as Perícias Acrobacia e Furtividade! */
export const armorPenalty = derived([armor, shield], ([$armor, $shield]) => {
  const negative = (num) => num < 0 ? num : -num
  const armor = negative(parseInt($armor.penalty))
  const shield = negative(parseInt($shield.penalty))

  return armor + shield
})

export const difficultyClass = derived([armor, shield, otherNumDefense], ([$armor, $shield, $otherNumDefense]) => {

  const bonus =  parseInt($armor.bonus) + parseInt($shield.bonus)
  const other = parseInt($otherNumDefense)
  
  return (10 + (bonus + other))
})


