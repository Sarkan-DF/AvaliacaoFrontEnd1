/* eslint-disable react/react-in-jsx-scope */
import { styled } from 'styled-components';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { loginAction } from '../store/modules/user.slice';

const MainLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
  width: 40%;

  .input {
    width: 100%;
  }
`;

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const user = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user.id) {
      navigate('/');
      return;
    }
  }, [user]);

  const submitLogin = (event: any) => {
    event.preventDefault();

    const loginUser = {
      email,
      password: event.target.password.value
    };

    console.log(loginUser);

    dispatch(loginAction(loginUser));
  };

  return (
    <MainLayout>
      <h3>Faça seu login abaixo</h3>

      <Form onSubmit={submitLogin}>
        <Box>
          <TextField
            required
            className="input"
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
        </Box>
        <br />
        <Box>
          <TextField
            required
            className="input"
            id="password"
            name="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
        </Box>
        <br />
        <Box>
          <Button className="input" variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </Form>
    </MainLayout>
  );
};
