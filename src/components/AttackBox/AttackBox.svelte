<script>
  import { fetchSvg } from '../../functionSVG.js'

  const line = [ 'input_attack', 'input_attack_test', 'input_damage', 'input_critical', 'input_type', 'input_reach' ]

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
      {#each line as item, index}
        {#if index < 5}
          <tr>
            {#each line as item}
              <td><input class="txt_input" id="{item + '_'+(index+1)}" type="text"></td>
            {/each}
          </tr>
        {/if}
      {/each}
    </tbody>

  </table>

  <img src="../img/attack_box.svg" alt="" use:fetchSvg>
</div>

<style lang="scss">
  @import "./style-svg.scss";
  @import "./style.scss";
</style>