<script>
  export let num = ''
</script>

<div class="equipment_line">
  <input class="txt_description" id="txt_description_{num}" type="text">
  <input class="txt_weight" id="txt_weight_{num}" type="text" value="0">
</div>


<style lang="scss">

  .equipment_line {
    width: 100%;
    height: 2.3rem;
    
    display: grid;
    grid-template-columns: 80% 17%;
    gap: 3%;
    margin-bottom: .5rem;

    input {
      width: 100%;
      font-size: 1.4rem;
      border-bottom: 2px solid #000;
    }
    .txt_weight {
      text-align: center;
    }
    
  }

</style>