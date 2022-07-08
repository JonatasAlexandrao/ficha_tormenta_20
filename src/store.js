import { writable, derived } from 'svelte/store';

export const count = writable('teste')

export const intTotal = writable(10)
export const intModifier = derived(intTotal, ($intTotal) => {

  /*let result = 0
  if($intTotal > 10) {
    result = ($intTotal - 10) / 2
  }*/


  //return result
  return $intTotal / 2
})
