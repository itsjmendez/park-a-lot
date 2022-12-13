import React from 'react';
import axios from 'axios';

export const loginAPI = async ({ user, pwd }) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({ username: user, password: pwd }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.accessToken;
    setAuth({ user, pwd, accessToken });
    setUser('');
    setPwd('');
    setSuccess(true);
  } catch (err) {
    if (!err?.response) {
      setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
    } else {
      setErrMsg('Login Failed');
    }
    errRef.current.focus();
  }
};
