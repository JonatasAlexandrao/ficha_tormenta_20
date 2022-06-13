<script>
  import TextBoxPersonagem from './elements/TextBoxPersonagem.svelte'
  import TextBoxDefault from './elements/TextBoxDefault.svelte'
  import CharacterInfo from './CharacterInfo.svelte'

</script>

<header class="container_names">
  <div class="container_logo">
    <img class="logo" src="../img/logo-tormenta.png" alt="logo">
  </div>
  <div class="container_character">
    <TextBoxPersonagem />
    <TextBoxDefault text='Jogador' nameInput='player' />
  </div>

  <CharacterInfo />
  
  
</header>


<style lang="scss">

  .container_names {
    width: 100%;
    //height: 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    

    .container_logo {
      width: 100%;
      height: 5rem;
      
      display: flex;
      justify-content: center;
      align-items: center;

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
      gap: 1%;
    }

    
    
  }


</style>