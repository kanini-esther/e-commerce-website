import React from "react";
import App from "./App.js";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1 style={{ textAlign: "center" }}>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1 style={{ textAlign: "center" }}>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <label>First name</label>
        <input type="text" name="username" placeholder="Firstname" />
        <label>Last name</label>
        <input type="text" name="username" placeholder="Lastname" />
        <label>Email</label>
        <input type="email" name="email" placeholder="your@email.com" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <label> Confirm password</label>
        <input type="password" name="password" placeholder="Confirm password" />
      </form>
      <button onClick={props.onClick} className="button">
        SIGN UP
      </button>
      
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Email</label>
        <input type="email" name="email" placeholder="your@email.com" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
      </form>

      <br />
      <button onClick={props.onClick} className="button">
        Login
      </button>
    </div>
  );
}

export default LoginControl;
