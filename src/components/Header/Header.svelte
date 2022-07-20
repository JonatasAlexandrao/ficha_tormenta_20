<script>
  import TextBoxCharacter from '../../elements/TextBoxCharacter/TextBoxCharacter.svelte'
  import TextBoxDefault from '../../elements/TextBoxDefault/TextBoxDefault.svelte'

  import { VAR_character, VAR_player } from '../../store'

</script>

<header class="container_basic_info">
  <div class="container_logo">
    <img class="logo" src="../img/logo-tormenta.png" alt="logo">
  </div>
  <div class="container_name">
    <TextBoxCharacter bind:value={$VAR_character.name} />
    <TextBoxDefault text='Jogador' nameInput='player' caracterLength='19' bind:value={$VAR_player} />
  </div>

  <div class="container_character_info">
    <TextBoxDefault text='Raça' nameInput='race' caracterLength='10' bind:value={$VAR_character.race} />
    <TextBoxDefault text='Origem' nameInput='origin' caracterLength='15' bind:value={$VAR_character.origin} />
    <TextBoxDefault text='Classe & Nível' nameInput='class-level' caracterLength='16' bind:value={$VAR_character.class} bind:valueLevel={$VAR_character.level} />
    <TextBoxDefault text='Divindade' nameInput='divinity' caracterLength='10' bind:value={$VAR_character.divinity} />
    
  </div>
  
  
</header>


<style lang="scss">
  @import "./style.scss";
</style>