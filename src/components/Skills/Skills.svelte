<script>
  import { fetchSvg } from '../../functionSVG.js'
  import { VAR_skills } from '../../store'
  import SkillLine from '../../elements/SkillLine/SkillLine.svelte';

</script>

<div class="container_skills">
  <table class="table_skills">
    <thead>
      <tr>
        <th>Perícias</th>
        <th>Total</th>
        <th>1/2 do Nível</th>
        <th>Mod. de Atributo</th>
        <th>Treino</th>
        <th>Outros</th>
      </tr>
    </thead>
    <tbody>

      {#each $VAR_skills as {text, attribute, className}, index}
        <SkillLine text={text} attributeDefault={attribute} className={className} num={index} />
      {/each}
      
    </tbody>
      
  </table>
  <div class="table_footer">
    <p>¹ Penalidade de Aramadura.</p>
    <p>² Somente treinado.</p>
  </div>

  <img src="../img/Pericias/skills_top.svg" alt="" use:fetchSvg>
  <img src="../img/Pericias/skills_bottom.svg" alt="" use:fetchSvg>

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>