import React from "react";
class Tasklist extends React.Component{
  render(){
    return(
      <div >

      <input type="checkbox" id="checkbox1" name="check1" />
      <label htmlFor="checkbox1"> Take a walk  </label><br></br>


      <input type="checkbox" id="checkbox2" name="check2" />
      <label htmlFor="checkbox2"> Pick up the grocery  </label><br></br>

      <input type="checkbox" id="checkbox3" name="check3" />
      <label htmlFor="checkbox3"> Read a book </label><br></br>

      <input type="checkbox" id="checkbox4" name="check4" />
      <label htmlFor="checkbox4"> Meeting with friends  </label><br></br>


      </div>
    )
  }
}
export default Tasklist
