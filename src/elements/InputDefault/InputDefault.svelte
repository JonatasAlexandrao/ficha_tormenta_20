<script>

  export let nameInput = ''
  export let caracterLength = 8
  export let className = 'default'
  export let maxlength = ''

  let value = ''
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
  <input class="txt_input -level" id="level" maxlength="2">
{/if}


<style lang="scss">
  %calcFontDefault {
    &.s-1 { font-size: 1.8rem; }
    &.s-2 { font-size: 1.6rem; }
    &.s-3 { font-size: 1.5rem; }
    &.s-4 { font-size: 1.4rem; }
    &.s-5 { font-size: 1.35rem; }
    &.small { font-size: 1.25rem; }
  }

.txt_input {
  width: 100%;
  height: 100%;
  padding: .5rem;
  font-size: 2rem;
}
#class-level {
  width: 97%;
}

.txt_input.-character {
  width: 90%;
  height: 3.2rem;
  font-size: 2.5vw;
  z-index: 1;

  &.s-3 { font-size: 2rem; }
  &.s-4 { font-size: 1.9rem; }
  &.s-5 { font-size: 1.8rem; }
  &.small { font-size: 1.6rem; }
}

.txt_input.-default {
  @extend %calcFontDefault
}

.txt_input.-max_points { 
  font-size: 3.5rem;
  &.s-1 { font-size: 2.3rem; }
}

.txt_input.-historic {
  @extend %calcFontDefault
}

</style>