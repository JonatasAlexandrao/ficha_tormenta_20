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

