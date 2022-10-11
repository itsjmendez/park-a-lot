import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Hook for the success message after log in
  const [loggedIn, setLoggedIn] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUsername = (event) => {
    setValues({...values, username: event.target.value})
  };

  const handlePassword = (event) => {
    setValues({...values, password: event.target.value})
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    if (values.username && values.password) {
     setValid(true);
   };
   setLoggedIn(true);
  };

  return(
    <div className="singInForm">
        <form className="logInForm" onSubmit={handleSignIn}>
          <h1 className="firstHeader">Park-a-lot</h1>
          <input
            id="username"
            className="form" 
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleUsername}
            value={values.username}
          /><br />
           {loggedIn && !values.username ? <span id="usernameError">Please enter your username</span> : null}
          <input 
            id="password"
            className="form"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handlePassword}
            value={values.password}
          /><br />
          {loggedIn && !values.password ? <span id="passwordError">Please enter your password</span> : null} 
          <button className="form" type="submit">Log In</button>
          <p><a href="https://policies.google.com/terms?hl=en-GB">Forgot Password?</a></p>
          <p id="login">New user? <a id="logIn" href="https://my.jsu.edu/">Sign up</a></p>
          {loggedIn && valid ? <div className="successMessage">Congratulations! You are logged in!!!</div> : null}         
        </form>
      </div> 
  );
};

export default Login;
