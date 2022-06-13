<script>

</script>

<div class="container_txt -character">

  <input class="txt_input" id="character" type="text" >
  <label class="txt_label" for="character">Personagem</label>

  <object class="edge_character" 
    data="../img/Caixas/Personagem.svg" 
    aria-label="lateral-E" 
    aria-hidden="true">
  </object>

  

</div>

<style lang="scss">
  .container_txt.-character {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    .edge_character {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      pointer-events: none;
    }

    .txt_input {
      width: 90%;
      height: 3.2rem;
      font-size: 2.5vw;
      background-color: rgba(43, 86, 179, 0.1);
    }
    .txt_label {
      position: absolute;
      
      bottom: -.5rem;
      left: 0;
      transform: translateY(100%);

      margin-left: 1rem;

      font-size: 1.8rem;
      //font-size: clamp(1rem, 2vw, 2rem);
      font-family: Tormenta20, sans-serif;
      text-transform: uppercase;      
    }
    
  }
  
</style>