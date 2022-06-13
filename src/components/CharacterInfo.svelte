<script>
  import TextBoxDefault from './elements/TextBoxDefault.svelte'
</script>

<div class="character-info">
  <TextBoxDefault text='Raça' nameInput='race' />
  <TextBoxDefault text='Origem' nameInput='origin' />
  <TextBoxDefault text='Classe & Nível' nameInput='class-level' />
  <TextBoxDefault text='Divindade' nameInput='divinity' />
</div>



<style lang="scss">

  .character-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

</style>