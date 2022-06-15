<script>
  export let text = ''
</script>

<div class="container_attribute">
  <span class="title">{text}</span>
  <label class="label_attribute" for="attribute_{text}">0</label>
  <input class="input_attribute" id="attribute_{text}" type="text">
  <object class="img_attribute" 
    data="../img/Status.svg" 
    aria-label="lateral-E" 
    aria-hidden="true">
  </object>
</div>


<style lang="scss">

  .container_attribute {

    width: 7.5rem;
    height: 7.5rem;
    position: relative;

    display: flex;
    justify-content: center;
   // align-items: center;

    .img_attribute {
      height: 100%;
    }

    .title {
      width: 3rem;
      position: absolute;
      left: 50%;
      top: .2rem;

      font-family: Tormenta20, sans-serif;
      text-align: center;
      transform: translateX(-50%);
    }

    .label_attribute {
      position: absolute;
      left: 50%;
      top: 40%;

      transform: translateX(-50%) translateY(-50%);

      font-size: 2.7rem;
      opacity: .6;
    }
    .input_attribute {
      width: 2.6rem;
      height: 1.9rem;

      position: absolute;
      bottom: .75rem;
      border-radius: 1rem;

      text-align: center;
      font-size: 1.5rem;
      
    }

  }

</style>