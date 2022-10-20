import React from "react";
import * as S from "./loginStyles";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import { useState } from "react";
// import { NavLink as Link } from "react-router-dom";

const loginTemplate = {
  username: "",
  password: "",
};

export const Login = ({ formInputs }) => {
  const [values, setValues] = useState(loginTemplate);
  //Hook for the success message after log in
  const [loggedIn, setLoggedIn] = useState(false);
  const [valid, setValid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (values.username && values.password) {
      setValid(true);
    }
    setLoggedIn(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  return (
    <S.Box>
      <S.Container>
        <S.Header>Park-a-lot</S.Header>
        <S.FormContainer>
          <S.Form>
            {formInputs.map((input, index) => (
              <FormItem
                key={index}
                name={input.name}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                onChangeInput={handleInputChange}
              />
            ))}
            <Button onClick={handleLogin}>Log in</Button>
            <S.Paragraph>
              <S.LinkTo to="/forgotpassword">Forgot Password?</S.LinkTo>
            </S.Paragraph>
            <S.Paragraph>
              New User?
              <S.LinkTo to="/signup"> Sign up</S.LinkTo>
            </S.Paragraph>
          </S.Form>
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

Login.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};

Login.defaultProps = {
  formInputs: [
    { name: "name", label: "Username", type: "text", placeholder: "Username" },
    {
      name: "password",
      label: "Password",
      type: "text",
      placeholder: "Password",
    },
  ],
};

export default Login;

// FormItem component might be relocated.
const FormItem = ({ name, type, placeholder, onChangeInput }) => (
  <S.FormItemContainer>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    />
  </S.FormItemContainer>
);

FormItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
};

FormItem.defaultProps = {
  name: "",
  label: "",
  type: "text",
  placeholder: "",
  onChangeInput: () => {},
};

