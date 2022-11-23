import React from 'react';

export const Login = () => {
  return <div class="container pt-5 m-5">
    <h2>Login Page</h2>
    <div class="row justify-content-center align-items-center g-2">
      <div class="col-lg-4 shadow p-5 ">
        <form class="form" method="post" action="/auth">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control is-valid" name="username" id="username" aria-describedby="username" placeholder="username" />
            <div class="valid-feedback">Good job!</div>
            <div class="invalid-feedback">Please Enter Valid Username</div>
            <small id="username" class="form-text text-muted">Enter username here</small>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password"
              class="form-control is-invalid" name="password" id="password" aria-describedby="password" placeholder="password"/>
            <div class="valid-feedback">Good job!</div>
            <div class="invalid-feedback">Wrong password, try again</div>
            <small id="password" class="form-text text-muted">Enter your password here</small>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="forgotpassword"/>
            <label class="form-check-label" for="forgotpassword">
              Forgot Password
            </label>
          </div>
          <div class="d-grid gap-2 pt-3">
            <button type="submit" name="btnlogin" id="btnlogin" class="btn btn-primary shadow">Authenticate</button>
          </div>
        </form>
        
        <div class="alert alert-link alert-sm" role="alert">
          <strong>Not a member! </strong>
          <a href="https://google.com" class="alert-link">Sign up</a>
        </div>

      </div>
      <div class="col-lg-4"></div>
      <div class="col-lg-4"></div>
    </div>
  </div>;
};
