<script>
  import Proficiency from "../Proficiency/Proficiency.svelte"
  import SizeBox from "../../elements/SizeBox/SizeBox.svelte"
  import DisplacementBox from "../../elements/DisplacementBox/DisplacementBox.svelte"

</script>

<div class="container_other_proficiencies">
  <Proficiency />
  <SizeBox />
  <DisplacementBox />
</div>

<style lang="scss">
  .container_other_proficiencies {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 10rem 4.2rem 3.2rem;
    align-content: space-between;
  }
</style>