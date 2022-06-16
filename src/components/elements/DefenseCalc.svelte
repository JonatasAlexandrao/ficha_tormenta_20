<script>
  const teste = document.querySelector(".defense_calc")
  console.log(teste)
</script>

<div class="defense_calc">

  <div class="defense_num">
    <object class="img_defense_num" 
      data="../img/Defesa/Defesa-num.svg" 
      aria-label="escudo com o numero da Defesa" 
      aria-hidden="true">
    </object>
  </div>
  <div class="defense_min">
    <object class="img_defense_min" 
      data="../img/Defesa/Defesa-min.svg" 
      aria-label="valor minimo da Defesa" 
      aria-hidden="true">
    </object>
  </div>
  <div class="defense_modifiers">
    <object class="img_defense_modifiers" 
      data="../img/Defesa/Defesa-modificadores.svg" 
      aria-label="valores que mudam o total de Defesa" 
      aria-hidden="true">
    </object>
  </div>

</div>

<style lang="scss">
  .defense_calc {
    position: relative;
    width: 100%;
    height: 8rem;

    display: grid;
    grid-template-columns: 27% 1% 72%;
    //align-items: center;

    .defense_num {
      width: 100%;
      align-self: center;
    }
    .defense_min {
      width: 1200%;
      align-self: center;
      justify-self: center;
      //position: absolute;
      
    }
    .defense_modifiers {
      height: 70%;
    }
  }

</style>