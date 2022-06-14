<script></script>

<div class="container-health-mana">

  <input class="input-max-points" type="text">
  <input class="input-historic" type="text">

  <span class="title">Pontos de Vida</span>
  <span class="text-box1">Máximos</span>
  <span class="text-box2">Atuais</span>

  <object class="points-box"
    data="../img/Pontos-de-Vida-e-Mana.svg" 
    aria-label="Campos de Pontos de vida e mana" 
    aria-hidden="true">
  </object>


</div>


<style lang="scss">

.container-health-mana {

  position: relative;
  width: 90%;
  height: 8rem;

  justify-self: center;

  &.-health {
    grid-area: points_health;
  }
  &.-mana {
    grid-area: points_mana;
  }

  .input-max-points {
    width: 20%;
    height: 52%;
    position: absolute;
    top: 1.5rem;
    left: 1.55rem;

    text-align: center;
    font-size: 3.5rem;
  }

  .input-historic {
    width: 60%;
    height: 45%;
    position: absolute;
    top: 28%;
    left: 34%;

    font-size: 2.2rem;
    text-align: center;
  }

  .points-box {
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    right: 30.5%;
    top: .8rem;

    font-family: Tormenta20, Arial, sans-serif;
    text-align: center;
  }

  .text-box1 {
    position: absolute;
    right: 76%;
    bottom: 1.2rem;

    font-size: .8rem;
  }

  .text-box2 {
    position: absolute;
    right: 42.5%;
    bottom: 1rem;

    font-size: .8rem;
  }

}
  


</style>