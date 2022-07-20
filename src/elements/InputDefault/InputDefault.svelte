<script>

  export let nameInput = ''
  export let caracterLength = 8
  export let className = 'default'
  export let maxlength = ''
  export let readonly = false

  export let value = ''
    $: fontSize = value.length > caracterLength ? calcFontSize() : ''
  export let valueLevel = ''

  function calcFontSize() {
    const result = value.length - caracterLength

    if (result >= 6)
      return 'small'
    else
      return `s-${result}`
  /*
    jogador = 19
    raça = 10
    origem = 15
    Classe = 16
    divindade = 10
    */
  }

  function onKeyPress(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

</script>

<input class="txt_input -{className} {fontSize}" 
id={nameInput} name={nameInput} bind:value={value}
maxlength={maxlength}
on:keypress={onKeyPress}
readonly={readonly}
>

{#if nameInput === "class-level"}
  <input class="txt_input -level" id="level" maxlength="2" bind:value={valueLevel}>
{/if}


<style lang="scss">
  @import "./style.scss";
</style>