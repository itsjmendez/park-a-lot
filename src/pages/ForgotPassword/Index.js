import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import * as S from "./ForgotPasswordStyles";

const resetTemplate = {
  email: "",
};

export const ForgotPassword = ({ formInputs }) => {
  const [values, setValues] = useState(resetTemplate);

  const [reset, setReset] = useState(false);
  const [valid, setValid] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (values.email) {
      setValid(true);
    }
    setReset(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  return (
    <S.Box>
      <S.Container>
        <S.Header>Park-a-lot</S.Header>
        <S.HeaderTwo>Forgot Your Password?</S.HeaderTwo>
        <S.HeaderThree>
          Enter your email and we'll send you a link to reset your password.
        </S.HeaderThree>
        <S.FormContainer>
          <S.Form>
            {reset && !values.email ? (
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
            <Button onClick={handleReset}>Send Password Reset Link</Button>
            {reset && valid ? (
              <S.Message>Password Reset Link Sent!</S.Message>
            ) : null}
            <S.HrLine>Or</S.HrLine>
            <S.Paragraph>
              <S.LinkTo to="/signup">Create New Account</S.LinkTo>
            </S.Paragraph>
            <S.Div>
              <S.LinkTo to="/login"> Back To Login</S.LinkTo>
            </S.Div>
          </S.Form>
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

ForgotPassword.propTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};

ForgotPassword.defaultProps = {
  formInputs: [
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Email",
    },
  ],
};

export default ForgotPassword;

// FormItem component might be relocated.
const FormItem = ({ name, type, placeholder, size, onChangeInput }) => (
  <S.FormItemContainer>
    <S.Input
      name={name}
      type={type}
      placeholder={placeholder}
      size={size}
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
