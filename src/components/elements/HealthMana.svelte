<script>
  export let text = ''
  export let subClass = ''
</script>

<div class="container_health_mana -{subClass}">

  <input class="input_max_points" type="text">
  <input class="input_historic" type="text">

  <span class="title">Pontos de {text}</span>
  <span class="text_box1">Máximos</span>
  <span class="text_box2">Atuais</span>

  <object class="points_box"
    data="../img/Pontos-de-Vida-e-Mana.svg" 
    aria-label="Campos de Pontos de vida e mana" 
    aria-hidden="true">
  </object>


</div>


<style lang="scss">

.container_health_mana {

  position: relative;
  width: 90%;
  height: 8rem;

  //margin: 1rem 0;

  justify-self: center;

  &.-health {
    grid-area: points_health;
    margin: .5rem 0;
  }
  &.-mana {
    grid-area: points_mana;
    margin-bottom: 1rem;
  }

  .input_max_points {
    width: 20%;
    height: 52%;
    position: absolute;
    top: 1.5rem;
    left: 1.6rem;

    text-align: center;
    font-size: 3.5rem;
  }

  .input_historic {
    width: 60%;
    height: 45%;
    position: absolute;
    top: 28%;
    left: 34%;

    font-size: 2.2rem;
    text-align: center;
  }

  .points_box {
    width: 100%;
    height: 100%;
  }

  .title {
    width: 9.5rem;
    position: absolute;
    right: 27%;
    top: .6rem;

    font-family: Tormenta20, Arial, sans-serif;
    text-align: center;
  }

  .text_box1 {
    position: absolute;
    right: 76.5%;
    bottom: .9rem;

    font-size: .8rem;
  }

  .text_box2 {
    position: absolute;
    right: 43%;
    bottom: .9rem;

    font-size: .8rem;
  }

}
  


</style>