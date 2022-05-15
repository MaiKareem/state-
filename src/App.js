import React from "react";
import Profile from "./Profile";


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      show:false
    }
  }
 

  handleClick=()=> {
    this.setState({show:!this.state.Show }) 
  }

  render(){
   return (
    <div>
   {this.state.show ? <Profile/>: <></> }
   <button onClick={this.handleClick}> ClickMe</button>
    </div>
     
   )
 }
}
export default App;