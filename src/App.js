import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Tasklist from "./Tasklist.js";
class App extends React.Component{
  render(){
    return(
      <div>
      <Header /><hr></hr>
      <Body />
      <Tasklist />
      </div>
    )
  }
}
export default App
