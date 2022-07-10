<script>
  import TextBoxCharacter from '../../elements/TextBoxCharacter/TextBoxCharacter.svelte'
  import TextBoxDefault from '../../elements/TextBoxDefault/TextBoxDefault.svelte'

  let info = {
    player: '',
    character: '', 
    race: '',
    origin: '',
    characterClass: '',
    level: 1,
    divinity: ''
  }

</script>

<header class="container_basic_info">
  <div class="container_logo">
    <img class="logo" src="../img/logo-tormenta.png" alt="logo">
  </div>
  <div class="container_name">
    <TextBoxCharacter bind:value={info.player} />
    <TextBoxDefault text='Jogador' nameInput='player' caracterLength='19' bind:value={info.character} />
  </div>

  <div class="container_character_info">
    <TextBoxDefault text='Raça' nameInput='race' caracterLength='10' bind:value={info.race} />
    <TextBoxDefault text='Origem' nameInput='origin' caracterLength='15' bind:value={info.origin} />
    <TextBoxDefault text='Classe & Nível' nameInput='class-level' caracterLength='16' bind:value={info.characterClass} bind:valueLevel={info.level} />
    <TextBoxDefault text='Divindade' nameInput='divinity' caracterLength='10' bind:value={info.divinity} />
    
  </div>
  
  
</header>


<style lang="scss">
  @import "./style.scss";
</style>