<script>
  import { fetchSvg } from '../../functionSVG.js'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

  let attackInfo = []

  for (let index = 0; index < 5; index++) {
    attackInfo[index] = [
      { description: 'Ataque', idName: `input_attack_${index+1}`, value: '' },
      { description: 'Teste', idName: `input_attack_test_${index+1}`, value: '' },
      { description: 'Dano', idName: `input_damage_${index+1}`, value: '' },
      { description: 'Crítico', idName: `input_critical_${index+1}`, value: '' },
      { description: 'Tipo', idName: `input_type_${index+1}`, value: '' },
      { description: 'Alcance', idName: `input_reach_${index+1}`, value: '' }
    ] 
  }

</script>

<div class="container_attack_box">

  <table class="table_attack">
    <thead>
      <tr>
        <th>Ataques</th>
        <th>Teste de Ataque</th>
        <th>Dano</th>
        <th>Crítico</th>
        <th>Tipo</th>
        <th>Alcance</th>
      </tr>
    </thead>

    <tbody>
 
      {#each attackInfo as line}
        <tr>
          {#each line as item, i}
            <td>
              <InputDefault className="attack" nameInput={item.idName} caracterLength={i >= 1 ? '2' : '10'} bind:value={item.value} />
            </td>
          {/each}
        </tr>
      {/each}

    </tbody>

  </table>

  <img src="../img/attack_box.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";
  @import "./style.scss";
</style>