import React from "react";
import "./App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Vegetables", "Fruits", "Legumes", "Cerials"],
      quantity: ["2kg", "500g", "400g", "600g", "1kg"],
      price: [100, 50, 40, 1000],
    };
  }
  render() {
    return (
      // <div>
      //   <LoginControl />
      // </div>
      // const doubled = price.map((p) => p * 2)

      
      <div style={{textAlign: "center"}}>

        <div class="wrapper-welcome">
        {/* <div class="m">Welcome</div> */}
        <div class="e">Happy</div>
        <div class="g">Shopping</div>
        {/* <div class="a">A</div>
        <div class="n">N</div>
        <div class="ex">!</div> */}
</div>
        
       
      </div>
    );
    
 
  }
  
}
export default Home;
