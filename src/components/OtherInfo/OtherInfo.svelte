<script>

  import DefenseAndExperience from "../DefenceAndExperience/DefenceAndExperience.svelte"
  import OtherProficiencies from "../OtherProficiencies/OtherProficiencies.svelte"
  
</script>

<div class="container_other_info">
  <DefenseAndExperience />
  <OtherProficiencies />

</div>


<style lang="scss">

  .container_other_info {
    width: 100%;
    margin-bottom: 1rem;

    display: grid;
    grid-template-columns: 58% 40%;
    grid-template-rows: 19rem;
    gap: 2%;
    
  }

</style>