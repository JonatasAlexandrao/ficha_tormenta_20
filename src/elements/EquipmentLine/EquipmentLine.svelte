<script>
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
  export let num = ''
</script>

<div class="equipment_line">
  <InputDefault className="description" nameInput="description_{num}" caracterLength="38" />
  <InputDefault className="weight" nameInput="weight_{num}" caracterLength="2" />
</div>


<style lang="scss">

  .equipment_line {
    width: 100%;
    height: 2.3rem;
    
    display: grid;
    grid-template-columns: 80% 17%;
    gap: 3%;
    margin-bottom: .5rem;    
  }

</style>