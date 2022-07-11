<script>

  import DefenseAndExperience from "../DefenceAndExperience/DefenceAndExperience.svelte"
  import Proficiency from "../Proficiency/Proficiency.svelte"
  import SizeBox from "../../elements/SizeBox/SizeBox.svelte"
  import DisplacementBox from "../../elements/DisplacementBox/DisplacementBox.svelte"
</script>

<div class="container_other_info">
  <DefenseAndExperience />
  <div class="container_proficiencies_other">
    <Proficiency />
    <SizeBox />
    <DisplacementBox />
  </div>

</div>


<style lang="scss">

  .container_other_info {
    width: 100%;
    margin-bottom: 1rem;

    display: grid;
    grid-template-columns: 58% 40%;
    grid-template-rows: 19rem;
    gap: 2%;
    .container_proficiencies_other {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-rows: 10rem 4.2rem 3.2rem;
      align-content: space-between;
    }
  }

</style>