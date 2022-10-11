import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';

const SignUp = ({ formInputs }) => {
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('test');
  };

  return (
    <S.Box>
      <S.Container>
        <S.FormContainer>
          <form>
            {formInputs.map((input) => (
              <FormItem key={input.id} label={input.label} type={input.type} />
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
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  formInputs: [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'text' },
    { id: 'carplate', label: 'Car Plate', type: 'text' },
    { id: 'phone', label: 'Phone', type: 'text' },
    { id: 'username', label: 'Username', type: 'text' },
    { id: 'password', label: 'Password', type: 'text' },
  ],
};

export default SignUp;

// FormItem component might be relocated.
const FormItem = ({ label, type }) => (
  <S.FormItemContainer>
    <S.Label>{label}</S.Label>
    <input type={type} />
  </S.FormItemContainer>
);

FormItem.protoTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

FormItem.defaultProps = {
  label: '',
  type: 'text',
};
