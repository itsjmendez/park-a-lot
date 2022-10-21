import React from "react";
import * as S from "./SignupStyles";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import { createAccoutAPI } from "../../services/createAccoutAPI";
import { useState } from "react";

const newUserTemplate = {
  email: "",
  name: "",
  license_plate: "",
  phone_number: "",
  username: "",
  password: "",
};

const SignUp = ({ formInputs }) => {
  const [newUser, setNewUser] = useState(newUserTemplate);

  const [signedUp, setSignedUp] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    createAccoutAPI(newUser);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value });
  };

  return (
    <S.Box>
      <S.Container>
        <S.Header>Park-a-lot</S.Header>
        <S.FormContainer>
          <S.Form>
            {signedUp &&
            (!newUser.email ||
              !newUser.name ||
              !newUser.license_plate ||
              !newUser.phone_number ||
              !newUser.username ||
              !newUser.password) ? (
              <S.Span>Please complete the required fields.</S.Span>
            ) : null}
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
            <S.Paragraph>
              By signing up, you agree to our
              <S.LinkTo to="/forgotpassword"> Terms </S.LinkTo>and
              <S.LinkTo to="/forgotpassword"> Privacy Policy </S.LinkTo>.
            </S.Paragraph>
            <Button onClick={handleSignUp}>Sign up</Button>
            <S.Paragraph>
              Have an account?
              <S.LinkTo to="/login"> Log in</S.LinkTo>
            </S.Paragraph>
            {signedUp && valid ? (
              <S.Message>You are logged in!</S.Message>
            ) : null}
          </S.Form>
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

SignUp.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  formInputs: [
    { name: "email", label: "Email", type: "text", placeholder: "Email" },
    { name: "name", label: "Name", type: "text", placeholder: "Full Name" },
    {
      name: "license_plate",
      label: "Car Plate",
      type: "text",
      placeholder: "License Plate",
    },
    {
      name: "phone_number",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      placeholder: "Password",
    },
  ],
};

export default SignUp;

// FormItem component might be relocated.
const FormItem = ({ name, label, type, placeholder, onChangeInput }) => (
  <S.FormItemContainer>
    <S.Input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    />
  </S.FormItemContainer>
);

FormItem.protoTypes = {
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
