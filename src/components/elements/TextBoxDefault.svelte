<script>
  export let text = ''
  export let nameInput = ''
  export let type = 'text'
</script>

<div class="container_txt -{nameInput}">

  <object class="side_edge -left" 
    data="../img/Caixas/lateral-padrao-E.svg" 
    aria-label="lateral-E" 
    aria-hidden="true">
  </object>
  <object class="side_edge -right" 
    data="../img/Caixas/lateral-padrao-D.svg" 
    aria-label="lateral-D" 
    aria-hidden="true">
  </object>


  <input class="txt_input" id="{nameInput}" type="{type}" >
  <label class="txt_label -{nameInput}" for="{nameInput}">{text}</label>
  
</div>




<style lang="scss">
  

  .container_txt {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 3.2rem;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5%;
      background-color: #000;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5%;
      background-color: #000;
    }
    
    .side_edge {
      position: absolute;
      height: 100%;
      top: 50%;

      &.-left {
        left: .5%;
        transform: translateY(-50%) translateX(-100%);
      }
      &.-right {
        right: .5%;
        transform: translateY(-50%) translateX(100%);
      }
      
    }

    .txt_input {
      width: 95%;
      height: 80%;

      padding: .5rem;
      font-size: 2vw;
 
    }
    .txt_label {
      position: absolute;
      bottom: -.1rem;
      left: -3%;
      transform: translateY(100%);

      font-size: 1.3rem;
      text-transform: uppercase;
      
      position: absolute;
      margin-left: .5rem;

      //font-size: clamp(1.1rem, 1.5vw, 1.4rem);
      text-transform: uppercase;  

      &.-player {
        bottom: 150%;
      }
    }


  }

</style>