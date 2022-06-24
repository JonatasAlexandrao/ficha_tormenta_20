<script>

  export let text = ''
  export let attribut = 'For'
  export let num = ''
  export let className = ''

</script>



<tr class="skill_line -{className}">
  <td> 
    <input class="check_box -{className}" id="check_box_{num}" type="checkbox"> 
    <label class="check_label" for="check_box_{num}">{text}</label>  
  </td>
  <td> 10 </td>
  <td> 4 </td>
  <td> {attribut} </td>
  <td> 2 </td>
  <td> <input class="text_outher -{className}" id="text_outher_{num}" type="text" value="0"></td>
</tr>


<style lang="scss">

  .skill_line {
    height: 3rem;
    font-size: 1.3rem;

    .check_box {
      opacity: .8;
    }

    td:first-child {
      display: flex;
      align-items: center;
      //border:none;

      & > input {
        margin: 0 1rem 0 0;

      }
    }

    td {
      height: 100%;
      text-align: center;
      border-bottom: rgba(0, 0, 0, .2) 1px solid;

      .text_outher {
        width: 100%;
        height: 90%;
        text-align: inherit;
      }
    }

    
  }
</style>