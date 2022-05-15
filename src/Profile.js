import React from "react";

class Profile extends React.Component{
    constructor() {
        super();
        this.state= {
    
            FullName: "Mai Kareem",
            Bio: "Iam a student",
            Profession: "Programmer",
            image:<img src="Lens.jpg" alt=""/>,
            Show:false
        
          };

    }
   
    
   
   
  render() {
    return (
        <div>
        <h2> full name: {this.state.FullName}</h2>
      <h3> Bio: {this.state.Bio}</h3>
      <h3> Profession:{this.state.Profession} </h3>
      <div> {this.state.image} </div>
      
 
 
     </div>
   )   
  }
  
}
  
export default Profile;
