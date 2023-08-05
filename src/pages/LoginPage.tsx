/* eslint-disable react/react-in-jsx-scope */
import { styled } from 'styled-components';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginAction } from '../store/modules/user.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { ApiService } from '../services/api.service';

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

  // CAPTURA O ESTADO GLOBAL DO USER.SLICE
  const user = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(user);
  }, [dispatch, user]);

  const submitLogin = async () => {
    // DISPARA A LOGINACTION QUE SOLICITA PARA A API
    // dispatch(loginAction({ email, password }));

    await ApiService.login({ email, password });
  };

  const goCasdastro = () => {
    navigate('/cadastro');
  };

  return (
    <MainLayout>
      <h3>Login página de recados</h3>

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
            onChange={e => setPassword(e.target.value)}
          />
        </Box>
        <br />
        <Box>
          <Button className="input" variant="contained" type="submit">
            Login
          </Button>
        </Box>
        <Typography paddingTop={2}>
          Não tem usuario?
          <Button variant="text" color="primary" onClick={goCasdastro}>
            Clique Aqui!
          </Button>
        </Typography>
      </Form>
    </MainLayout>
  );
};
