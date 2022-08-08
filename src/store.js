import { writable, derived } from 'svelte/store';

/* ====== Info Character and Player ====== */
export const VAR_player = writable('')

export const VAR_character = writable({
  name: '',
  race: '',
  origin: '',
  class: '',
  level: 1,
  divinity: ''
})

/* =========  Health/Mana points ========= */
export const VAR_health = writable({
  points: 0,
  historic: ''
})

export const VAR_mana = writable({
  points: 0,
  historic: ''
})

/* ============ Attributes ============== */

export const VAR_attributesTotal = writable([
  {name:'For', value: 10},
  {name:'Des', value: 10},
  {name:'Con', value: 10},
  {name:'Int', value: 10},
  {name:'Sab', value: 10},
  {name:'Car', value: 10}
])

export const VAR_attributesModifier = derived(VAR_attributesTotal, ($VAR_attributesTotal) => {
let response = []

$VAR_attributesTotal.forEach((attribute, index) => {
  if(isNaN(attribute.value)) {
    response[index] = { name:attribute.name, total:attribute.value, value:0 }
  }
  else {
    response[index] = { name:attribute.name, total:attribute.value, value:Math.trunc((attribute.value - 10) / 2) }
  }
});

return response
})

/* ============== AttackBox ============== */

function attackInfo() {
  let attackInfo = []
    for (let index = 0; index < 5; index++) {
      attackInfo[index] = [ 
        { description: 'Ataque', nameInput: `input_attack_${index+1}`, value: '' },
        { description: 'Teste', nameInput: `input_attack_test_${index+1}`, value: '' },
        { description: 'Dano', nameInput: `input_damage_${index+1}`, value: '' },
        { description: 'Crítico', nameInput: `input_critical_${index+1}`, value: '' },
        { description: 'Tipo', nameInput: `input_type_${index+1}`, value: '' },
        { description: 'Alcance', nameInput: `input_reach_${index+1}`, value: '' }
      ]
    }
    return attackInfo 
}
export const VAR_infoAttack = writable(attackInfo())


/* ============== Defense ============== */

export const VAR_armor = writable({
  name: '', 
  bonus: 0, 
  penalty: 0
})

export const VAR_shield = writable({
  name: '', 
  bonus: 0, 
  penalty: 0
})

export const VAR_otherNumDefense = writable(0)

/*Penalidade de armadura afeta as Perícias Acrobacia e Furtividade! */
export const VAR_armorPenalty = derived([VAR_armor, VAR_shield], ([$VAR_armor, $VAR_shield]) => {
  const negative = (num) => num < 0 ? num : -num
  const armor = negative(parseInt($VAR_armor.penalty))
  const shield = negative(parseInt($VAR_shield.penalty))

  return armor + shield
})

export const VAR_experience = writable('')

/* ============== Proficiency ============== */
export const VAR_infoProficiency = writable('')

/* ================ SizeBox ================== */
export const VAR_size = writable({
  selected: '',
  modifier: ''
})

/* ============== Displacement =============== */
export const VAR_displacement = writable('')


/* ================ Equipment ================ */
function equipmentInfo() {
  let equipment = []
  for (let i = 0; i < 15; i++) {
    equipment[i] = {item: '', weight: 0} 
  }
  return equipment
}
export const VAR_equipment = writable(equipmentInfo())

export const VAR_totalWeight = derived(VAR_equipment, ($VAR_equipment) => {
  return $VAR_equipment.reduce((prevVal,element) => { return prevVal + parseFloat(element.weight) }, 0)
})
export const VAR_maxWeight = derived(VAR_attributesTotal, ($VAR_attributesTotal) => {
  return (parseInt($VAR_attributesTotal[0].value)*3)
})
export const VAR_totalLifting = derived(VAR_attributesTotal, ($VAR_attributesTotal) => {
  return (parseInt($VAR_attributesTotal[0].value)*10)
})

export const VAR_totalTibar = writable('0.00')
export const VAR_totalTibarO = writable('0.00')

/* ================ Skills ================ */

export const VAR_skills = writable( [
  { text: 'Acrobacia ¤', attribute: 'Des', className: 'acrobatics', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: true, onlyTrained: false },
  { text: 'Adestramento ⌂', attribute: 'Car', className: 'training', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Atletismo', attribute: 'For', className: 'athletics', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Atuação', attribute: 'Car', className: 'performance', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Cavalgar', attribute: 'Des', className: 'ride', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Conhecimento ⌂', attribute: 'Int', className: 'knowledge', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Cura', attribute: 'Sab', className: 'healing', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Diplomacia', attribute: 'Car', className: 'diplomacy', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Enganação', attribute: 'Car', className: 'deception', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Fortitude', attribute: 'Con', className: 'fortitude', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Furtividade ¤', attribute: 'Des', className: 'stealth', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: true, onlyTrained: false },
  { text: 'Guerra ⌂', attribute: 'Int', className: 'war', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Iniciativa', attribute: 'Des', className: 'initiative', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Intimidação', attribute: 'Car', className: 'intimidation', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Intuição', attribute: 'Sab', className: 'intuition', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Investigação', attribute: 'Int', className: 'investigation', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Jogatina ⌂', attribute: 'Car', className: 'gambling', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Ladinagem ¤ ⌂', attribute: 'Des', className: 'thievery', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: true, onlyTrained: true },
  { text: 'Luta', attribute: 'For', className: 'fighting', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Misticismo ⌂', attribute: 'Int', className: 'mysticism', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Nobreza ⌂', attribute: 'Int', className: 'nobility', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Ofício 1 ⌂', attribute: 'Int', className: 'profission-1', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Ofício 2 ⌂', attribute: 'Int', className: 'profission-2', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Percepção', attribute: 'Sab', className: 'intimidation', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Pilotagem ⌂', attribute: 'Des', className: 'intuition', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Pontaria', attribute: 'Des', className: 'investigation', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Reflexos', attribute: 'Des', className: 'gambling', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Religião ⌂', attribute: 'Sab', className: 'thievery', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: true },
  { text: 'Sobrevivência', attribute: 'Sab', className: 'fighting', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
  { text: 'Vontade', attribute: 'Sab', className: 'mysticism', halfLevel: 0, trained: false, others: 0, total: 0, armorPenalty: false, onlyTrained: false },
] )
