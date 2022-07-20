<script>
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'
  import { VAR_equipment } from '../../store'
  export let num = ''
</script>

<div class="equipment_line">
  <InputDefault className="description" nameInput="description_{num}" caracterLength="38" bind:value={$VAR_equipment[num-1].item} />
  <InputDefault className="weight" nameInput="weight_{num}" caracterLength="2" bind:value={$VAR_equipment[num-1].weight} />
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