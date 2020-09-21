import React from 'react';
import {Link} from 'react-router-dom'

// const validate = () => {
//     if (username === "admin" &&
//       password === "123") {
//       alert("validation succeeded");
//       //location.href = "adminView.php";
//     } else {
//       alert("validation failed");

//     }

// }

function Login(props) {
    return(
        <div className="login-form" > 
  
   <form> 
    <label>Username</label> 
    <input type="text" name="username" placeholder="Username"/> 
 
  
    <label>Password</label> 
    <input type="password" name="password" placeholder="Password"/> 
    <Link to="/home"><button className="login-btn">Login</button></Link>
    
   </form> 
  </div> 
    )
}

export default Login


