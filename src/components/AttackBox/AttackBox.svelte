<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_infoAttack } from '../../store'
  import InputDefault from '../../elements/InputDefault/InputDefault.svelte'

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
 
      {#each $VAR_infoAttack as line}
        <tr>
          {#each line as item, i}
            <td>
              <InputDefault className="attack" nameInput={item.nameInput} caracterLength={i >= 1 ? '2' : '10'} bind:value={item.value} />
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