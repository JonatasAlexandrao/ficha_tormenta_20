<script>

  export let nameInput = ''
  export let caracterLength = 8
  export let className = 'default'
  export let maxlength = ''

  export let value = ''
    $: fontSize = value.length > caracterLength ? calcFontSize() : ''


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

</script>

<input class="txt_input -{className} {fontSize}" 
id={nameInput} bind:value={value}
maxlength={maxlength}
>

{#if nameInput === "class-level"}
  <input class="txt_input -level" id="level" maxlength="2" value="1">
{/if}


<style lang="scss">
  @import "./style.scss";
</style>