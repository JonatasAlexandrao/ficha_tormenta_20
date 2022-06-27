<script>
  export let className = ''
  export let idName = ''
  export let list = ['For','Des','Con', 'Int', 'Sab', 'Car']

  function clickComboBox() {

    const className = '.' + this.parentNode.className.replace(' ', ' .')
    const listBox = document.querySelector(className + ' > ul')


    //this.classList.add('-active')
    console.log(className)
    console.log(listBox)
    //console.log(`.${this.parentNode.className}`)
  }

</script>

<div class="container_combo_box">
  <input class="combo_box -{className}" id="{idName}" type="text" on:click="{clickComboBox}">

  <ul>
    {#each list as item}
      <li >{item}</li>
    {/each}
  </ul>
</div>

<!-- <div class="container_combo_box">
  <select class="combo_box -{className}" id="{idName}" type="text" value="{selected}">

  {#each list as item}
    <option >{item}</option>
  {/each}

</div> -->



<style lang="scss">
  @import "../../global.scss";

  .container_combo_box {
    position: relative;
    width: 100%;
    height: 75%;

    display: grid;
    align-items: center;

    z-index: 2;

    .combo_box {
      width: 100%;
      height: 75%;
      font-size: 1.4rem;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
    }

    ul {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      
      display: none;
      flex-direction: column;
      margin-top: .5rem;

      background-color: $color-fill-dark;
      border: 2px solid $color-stroke;
      z-index: 3;

      &.-active {
        display: flex;
      }

      &::before {
        content: '';
        display: inline-block;
        width: 1.5rem; 
        height: 1.5rem; 
      
        position: absolute;
        top: 6%;
        left: 50%;
        transform: translateY(-100%) translateX(-50%) rotate(45deg);

        background-color: $color-fill-dark;
        border: 2px solid $color-stroke;
        z-index: -3;
      }

      &::after {
        content: '';
        display: inline-block;
        width: 90%; 
        height: 100%; 
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translateX(-50%);

        background-color: $color-fill-dark;
        z-index: -3;
      }
      
      li {
        width: 100%;
        height: 100%;
        padding: .5rem 1rem;

        font-size: 1.4rem;
        text-align: center;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }

    
  }


</style>