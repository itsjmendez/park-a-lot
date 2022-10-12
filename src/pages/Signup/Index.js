import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';
import { createAccoutAPI } from '../../services/createAccoutAPI';
import { useState } from 'react';

const newUserTemplate = {
  name: '',
  license_plate: '',
  email: '',
  phone_number: '',
  username: '',
  password: '',
};

const SignUp = ({ formInputs }) => {
  const [newUser, setNewUser] = useState(newUserTemplate);

  const handleSignUp = (e) => {
    e.preventDefault();
    createAccoutAPI(newUser);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value });
  };

  return (
    <S.Box>
      <S.Container>
        <S.FormContainer>
          <form>
            {formInputs.map((input, index) => (
              <FormItem
                key={index}
                name={input.name}
                label={input.label}
                type={input.type}
                onChangeInput={handleInputChange}
              />
            ))}
            <Button onClick={handleSignUp}>Sign up</Button>
          </form>
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

SignUp.protoTypes = {
  formInputs: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  formInputs: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'license_plate', label: 'Car Plate', type: 'text' },
    { name: 'phone_number', label: 'Phone', type: 'text' },
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'text' },
  ],
};

export default SignUp;

// FormItem component might be relocated.
const FormItem = ({ name, label, type, onChangeInput }) => (
  <S.FormItemContainer>
    <S.Label>{label}</S.Label>
    <input name={name} type={type} onChange={onChangeInput} />
  </S.FormItemContainer>
);

FormItem.protoTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChangeInput: PropTypes.func,
};

FormItem.defaultProps = {
  name: '',
  label: '',
  type: 'text',
  onChangeInput: () => {},
};
