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
      response[index] = { name:$attribute.name, total:$attribute.value, value:0 }
    }
    else {
      response[index] = { name:$attribute.name, total:$attribute.value, value:Math.trunc(($attribute.value - 10) / 2) }
    }
  });

  return response
})

/* ============== AttackBox ============== */

function attackInfo() {
  let attackInfo = []
    for (let index = 0; index < 5; index++) {
      attackInfo[index] = [ 
        { description: 'Ataque', idName: `input_attack_${index+1}`, value: '' },
        { description: 'Teste', idName: `input_attack_test_${index+1}`, value: '' },
        { description: 'Dano', idName: `input_damage_${index+1}`, value: '' },
        { description: 'Crítico', idName: `input_critical_${index+1}`, value: '' },
        { description: 'Tipo', idName: `input_type_${index+1}`, value: '' },
        { description: 'Alcance', idName: `input_reach_${index+1}`, value: '' }
      ]
    }
    return attackInfo 
}
export const info__attack = writable(attackInfo())


/* ============== Defense ============== */
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

/* ============== Proficiency ============== */
export const info__proficiency = writable('')

/* ============== SizeBox ============== */
export const info__size = writable({
  selected: '',
  modifier: ''
})

/* ============== Displacement ============== */
export const info__displacement = writable('')