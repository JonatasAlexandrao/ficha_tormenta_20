<script>
  import { fetchSvg } from '../../functionSVG.js'
  import SkillLine from '../../elements/SkillLine/SkillLine.svelte';

  const skills = [
    { text: 'Acrobacia', attribut: 'Des', className: 'acrobatics' },
    { text: 'Adestramento', attribut: 'Car', className: 'training' },
    { text: 'Atletismo', attribut: 'For', className: 'athletics' },
    { text: 'Atuação', attribut: 'Car', className: 'performance' },
    { text: 'Cavalgar', attribut: 'Des', className: 'ride' },
    { text: 'Conhecimento', attribut: 'Int', className: 'knowledge' },
    { text: 'Cura', attribut: 'Sab', className: 'healing' },
    { text: 'Diplomacia', attribut: 'Car', className: 'diplomacy' },
    { text: 'Enganação', attribut: 'Car', className: 'deception' },
    { text: 'Fortitude', attribut: 'Con', className: 'fortitude' },
    { text: 'Furtividade', attribut: 'Des', className: 'stealth' },
    { text: 'Guerra', attribut: 'Int', className: 'war' },
    { text: 'Iniciativa', attribut: 'Des', className: 'initiative' },
    { text: 'Intimidação', attribut: 'Car', className: 'intimidation' },
    { text: 'Intuição', attribut: 'Sab', className: 'intuition' },
    { text: 'Investigação', attribut: 'Int', className: 'investigation' },
    { text: 'Jogatina', attribut: 'Car', className: 'gambling' },
    { text: 'Ladinagem', attribut: 'Des', className: 'thievery' },
    { text: 'Luta', attribut: 'For', className: 'fighting' },
    { text: 'Misticismo', attribut: 'Int', className: 'mysticism' },
    { text: 'Nobreza', attribut: 'Int', className: 'nobility' },
    { text: 'Ofício 1', attribut: 'Int', className: 'war' },
    { text: 'Ofício 2', attribut: 'Int', className: 'initiative' },
    { text: 'Percepção', attribut: 'Sab', className: 'intimidation' },
    { text: 'Pilotagem', attribut: 'Des', className: 'intuition' },
    { text: 'Pontaria', attribut: 'Des', className: 'investigation' },
    { text: 'Reflexos', attribut: 'Des', className: 'gambling' },
    { text: 'Religião', attribut: 'Sab', className: 'thievery' },
    { text: 'Sobrevivência', attribut: 'Sab', className: 'fighting' },
    { text: 'Vontade', attribut: 'Sab', className: 'mysticism' },
  ]

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

      {#each skills as {text, attribut, className}, index}
        <SkillLine text={text} attribut={attribut} className={className} num={index} />
      {/each}


    </tbody>
      
  </table>
  <div class="table_footer">
    <p>Penalidade de Aramadura.</p>
    <p>Somente treinado.</p>
  </div>

  <img src="../img/Pericias/skills_top.svg" alt="" use:fetchSvg>
  <img src="../img/Pericias/skills_bottom.svg" alt="" use:fetchSvg>

</div>

<style lang="scss">
  @import "./style.scss";
  @import "./style-svg.scss";
</style>