/* eslint-disable react/react-in-jsx-scope */
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginAction } from '../store/modules/user.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { MyAlert } from '../components/MyAlert';
import { MainLayout } from '../components/MainLayout';
import { Form } from '../components/Form';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //  ALERTS
  const [openAlert, setOpenAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState<'success' | 'info' | 'error' | 'warning'>('success');

  // CAPTURA O ESTADO GLOBAL DO USER.SLICE
  const user = useAppSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('idUserLogged');

    if (id) {
      navigation();
      return;
    }

    // OK = TRUE - CASO DE BOM
    if (user.ok && !id) {
      setTypeAlert('success');
      setOpenAlert(true);
      navigation();
      clearInputs();

      // AQUI SALVA O ID DO USER LOGADO NO LOCALSTORAGE
      localStorage.setItem('idUserLogged', JSON.stringify(user.data.idUser));

      // OK = FALSE & MENSAGEM != '' -- CASO DE RUIM
    } else if (!user.ok && user.message !== '') {
      setTypeAlert('error');
      setOpenAlert(true);
    }
  }, [dispatch, user]);

  const submitLogin = async () => {
    // DISPARA A LOGINACTION QUE SOLICITA PARA A API
    dispatch(loginAction({ email, password }));
  };

  const goCasdastro = () => {
    navigate('/cadastro');
  };

  const navigation = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const clearInputs = () => {
    setPassword('');
    setEmail('');
  };

  return (
    <MainLayout>
      <h3>Login página de recados</h3>

      <Form>
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
          <Button className="input" variant="contained" type="button" onClick={submitLogin}>
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
      <MyAlert open={openAlert} handleClose={() => setOpenAlert(false)} message={user.message} type={typeAlert} />
    </MainLayout>
  );
};
