/* eslint-disable react/react-in-jsx-scope */
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createUserAction, loginAction } from '../store/modules/user.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { MainLayout } from '../components/MainLayout';
import { Form } from '../components/Form';
import { MyAlert } from '../components/MyAlert';

export const CadastroPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);

  // INPUTS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  //  ALERTS
  const [openAlert, setOpenAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState<'success' | 'info' | 'error' | 'warning'>('success');
  const [messageAlert, setMessageAlert] = useState('');

  /// FICA OUVINDO NOSSO ESTADO GLOBAL P/ MOSTRAR O NOSSO ALERTA
  useEffect(() => {
    const id = localStorage.getItem('idUserLogged');

    if (id) {
      navigate('/');
      return;
    }

    if (user.ok) {
      alert(user.message, 'success');
      clearInputs();
      navigation();
    } else if (!user.ok && user.message !== '') {
      alert(user.message, 'error');
    }
  }, [user]);

  const clearInputs = () => {
    setRePassword('');
    setPassword('');
    setEmail('');
  };

  const navigation = () => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  const submitCadastro = () => {
    if (!email || !password || !rePassword) {
      alert('Preencha todos os campos!', 'warning');
      return;
    }

    if (password !== rePassword) {
      alert('Senhas não condizem!', 'warning');
      return;
    }

    const newUser = { email, password };

    dispatch(createUserAction(newUser));
  };

  const alert = (message: string, type: 'success' | 'info' | 'error' | 'warning') => {
    setOpenAlert(true);
    setMessageAlert(message);
    setTypeAlert(type);
  };

  const goLogim = () => {
    navigate('/login');
  };

  return (
    <MainLayout>
      <h3>Cadastro página de recados</h3>

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
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Box>
        <br />
        <Box>
          <TextField
            required
            className="input"
            id="password"
            name="password"
            label="Confirma Senha"
            variant="outlined"
            value={rePassword}
            onChange={e => setRePassword(e.target.value)}
            type="password"
          />
        </Box>
        <br />
        <Box>
          <Button className="input" variant="contained" type="button" onClick={submitCadastro}>
            Cadastrar Usuario
          </Button>
        </Box>
        <Typography paddingTop={2}>
          Já tem usuario?
          <Button variant="text" color="primary" onClick={goLogim}>
            Clique Aqui!
          </Button>
        </Typography>
      </Form>
      <MyAlert open={openAlert} handleClose={() => setOpenAlert(false)} message={messageAlert} type={typeAlert} />
    </MainLayout>
  );
};
