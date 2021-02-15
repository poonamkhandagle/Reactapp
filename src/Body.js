import React from "react";
class Body extends React.Component{
  constructor(){
    super()
    this.state = {}
    this.handleAddTask=this.handleAddTask.bind(this)
    this.handleEnterTask=this.handleEnterTask.bind(this)
  }
   handleAddTask(){
     console.log("Task is added successfully")
   }
   handleEnterTask(){
     console.log("Task is adding")
   }
  render(){
    return(
    <div className="body">
       <strong>Add Task:.</strong>
       <input type="textbox" placeholder="Enter your task here"  onChange={this.handleEnterTask}/>
       <input type="button" value="Add" onClick={this.handleAddTask} /><br></br>
         <h4>Priority</h4>
           <select>
             <option>High</option>
             <option>Medium</option>
             <option>Low</option>
          </select>

     </div>



    )
  }
}
export default Body;
