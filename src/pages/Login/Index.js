import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';
import * as S from './styles';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

// import axios from './api/axios';
const LOGIN_URL = 'http://localhost:3001/account/login';

const Login = () => {
  const { accessToken, setAccessToken } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data;
      console.log('accessToken :' + accessToken);
      setAccessToken(accessToken);
      setUsername('');
      setPassword('');
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

  return (
    <S.Box>
      <S.Container>
        <S.FormContainer>
          {success ? (
            <section>
              <h1>You are logged in!</h1>
              <br />
              <p>
                <a href="/">Go to Home</a>
              </p>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <Button>Sign In</Button>
              </form>
              <p>
                Need an Account?
                <br />
                <span className="line">
                  {/*put router link here*/}
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </section>
          )}
        </S.FormContainer>
      </S.Container>
    </S.Box>
  );
};

export default Login;
