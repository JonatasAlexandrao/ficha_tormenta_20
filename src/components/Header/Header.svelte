<script>
  import TextBoxCharacter from '../../elements/TextBoxCharacter/TextBoxCharacter.svelte'
  import TextBoxDefault from '../../elements/TextBoxDefault/TextBoxDefault.svelte'

</script>

<header class="container_names">
  <div class="container_logo">
    <img class="logo" src="../img/logo-tormenta.png" alt="logo">
  </div>
  <div class="container_character">
    <TextBoxCharacter />
    <TextBoxDefault text='Jogador' nameInput='player' />
  </div>

  <div class="container_character_info">
    <TextBoxDefault text='Raça' nameInput='race' />
    <TextBoxDefault text='Origem' nameInput='origin' caracterLength='12' />
    <TextBoxDefault text='Classe & Nível' nameInput='class-level' />
    <TextBoxDefault text='Divindade' nameInput='divinity' />
    
  </div>
  
  
</header>


<style lang="scss">

  .container_names {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;


    .container_logo {
      width: 100%;
      height: 5rem;
      
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 2rem;

      .logo {
        max-height: 100%;
      }
    }

    .container_character {
     
      width: 80%;
      height: 4.5rem;
      display: grid;
      grid-template-columns: 60% 40%;
      justify-content: center;
      align-items: flex-end;
      gap: 2%;
      margin-bottom: 2.2rem;
    }

    .container_character_info {
      width: 100%;
      display: flex;
      padding: 0 1rem;
      justify-content: space-between;
    }

    
    
  }


</style>