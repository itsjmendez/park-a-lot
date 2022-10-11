import React, { useState } from 'react';
import './Signup.css';

export const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    licensePlate: "",
    username: "",
    password: "",
  });

  // Hook for the success message after registration
  const [registered, setRegistered] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEmail = (event) => {
    setValues({...values, email: event.target.value})
  };

  const handleFullName = (event) => {
    setValues({...values, fullName: event.target.value})
  };

  const handlePhoneNumber = (event) => {
    setValues({...values, phoneNumber: event.target.value})
  }

  const handleAddress = (event) => {
    setValues({...values, address: event.target.value})
  };

  const handleLicensePlate = (event) => {
    setValues({...values, licensePlate: event.target.value})
  };

  const handleUsername = (event) => {
    setValues({...values, username: event.target.value})
  };

  const handlePassword = (event) => {
    setValues({...values, password: event.target.value})
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (values.email && values.fullName && values.phoneNumber && values.address &&
       values.licensePlate && values.username && values.password) {
      setValid(true);
    };
    setRegistered(true);
  };

  return(
    <div className="signUpForm">
      <form className="registrationForm" onSubmit={handleSignUp}>
        <h1 className="firstHeader">Parkbook</h1>
        <input 
          id="email"
          className="form"
          type="text"                    
          placeholder="Email"
          name="email"
          onChange={handleEmail}
          value={values.email}
        /><br />
        {registered && !values.email ? <span id="emailError">Please enter your email</span> : null}
        <input 
          id="fullName"
          className="form"
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleFullName}
          value={values.fullName}
        /><br />
        {registered && !values.fullName ? <span id="fullNameError">Please enter your full name</span> : null}        
        <input 
          id="phoneNumber"
          className="form"
          type="text"
          placeholder="Phone"
          name="phoneNumber"
          onChange={handlePhoneNumber}
          value={values.phoneNumber}
        /><br />
        {registered && !values.phoneNumber ? <span id="phoneNumberError">Please enter your phone number</span> : null}          
        <input 
          id="address"
          className="form"
          type="text"
          placeholder="Address"
          name="address"
          onChange={handleAddress}
          value={values.address}
        /><br />
        {registered && !values.address ? <span id="addressError">Please enter your address</span> : null}
        <input 
          id="licensePlate"
          className="form"
          type="text"
          placeholder="License Plate Number"
          name="licensePlate"
          onChange={handleLicensePlate}
          value={values.licensePlate}
        /><br />
        {registered && !values.licensePlate ? <span id="licensePlateError">Please enter license plate number</span> : null}           
        <input 
          id="username"
          className="form"
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleUsername}
          value={values.username}
        /><br />
        {registered && !values.username ? <span id="usernameError">Please enter your username</span> : null}     
        <input 
          id="password"
          className="form"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePassword}
          value={values.password}
        /><br />
        {registered && !values.password ? <span id="passwordError">Please enter your password</span> : null}  
        <p>By signing up, you agree to our <a href="https://policies.google.com/terms?hl=en-GB">Terms</a> and <a href="https://policies.google.com/privacy?hl=en_GB">Privacy Policy</a>.</p>     
        <button className="form" type="submit">Sign Up</button>
        <p id="login">Have an account? <a id="logIn" href="https://my.jsu.edu/">Log in</a></p>
        {registered && valid ? <div className="successMessage">Congratulations! You are signed up!!!</div> : null} 
      </form>
    </div>
  );
};

export default SignUp;