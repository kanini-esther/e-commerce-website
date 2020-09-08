import React from "react";
import "./App.css";

class Form extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Welcome back!</h1>
        <form>
          <p>User name</p>
          <input type="text"></input>

          <p>Password</p>
          <input type="text"></input>
          <br></br>
          <button className="btn"> LOG IN</button>
        </form>
        
      </div>



    );
  }
}

export default Form;
