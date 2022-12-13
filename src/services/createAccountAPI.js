import React from 'react';
import axios from 'axios';

export const createAccountAPI = (newUser) => {
  const newLocal = 'http://localhost:3001/member/create';
  axios
    .post(newLocal, newUser)
    .then((response) => {
      console.log('User Creation Success: ' + response);
    })
    .catch('ERROR: not able to create user');
};
