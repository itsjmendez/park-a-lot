import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './ForgotPassword.css';

export const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const [sendLink, setSendLink] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEmail = (event) => {
    setValues({...values, email: event.target.value})
  };

  const handleLink = (event) => {
    event.preventDefault();
    if (values.email) {
     setValid(true);
   };
   setSendLink(true);
  };

  return(
    <div className="forgotPassword">
        <form className="resetForm" onSubmit={handleLink}>
          <h1 className="firstHeader">Park-a-lot</h1>
          <h2 className="secondHeader">Forgot your password?</h2>
          <p id="message">Enter your email and we'll send you a link to reset your password.</p>
          <input
            id="email"
            className="form" 
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            value={values.email}
          /><br />
           {sendLink && !values.email ? <span id="emailError">Please enter your email</span> : null}
          <button className="submit" type="submit">Send Password Reset Link</button>
          {sendLink && valid ? <div className="msg">Password Reset Link Sent!!!</div> : null}
          <p id="hrLines">Or</p>
          <p><Link to="/signup">Create New Account</Link></p>
          {/* <p id="create"><a className="account" href="https://my.jsu.edu/">Create New Account</a></p>   */}
          <div className="login"><Link to="/login">Back To Login</Link></div>
          {/* <div className="login"><a className="account" href="https://my.jsu.edu/">Back To Login</a></div> */}
        </form>
      </div> 
  );
};

export default ForgotPassword;