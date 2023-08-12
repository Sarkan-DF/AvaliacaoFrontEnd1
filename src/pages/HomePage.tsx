import React, { useEffect, useState } from 'react';
import { ErrandsList } from '../components/errandsList';
import { useDispatch, useSelector } from 'react-redux';
// import { listTransactionsAction } from '../store/modules/errands.slice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { TransactionType } from '../models/errands.model';
import { listErrandsAction } from '../store/modules/errands.slice';
import { Box, Button } from '@mui/material';
import { setInitialState } from '../store/modules/user.slice';

export const HomePage = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.data);

  const [idUserLogged, setIdUserLogged] = useState('');
  const [erro, setErro] = useState(undefined);

  useEffect(() => {
    // VAI NO LOCALSTORAGE BUSCAR O VALOR DA CHAVE = idUserLogged
    const id = localStorage.getItem('idUserLogged');

    let idParse;
    try {
      if (id) {
        idParse = JSON.parse(id);
      }
    } catch (error) {
      idParse = undefined;
    }

    if (!idParse) {
      navigate('/login');
      return;
    }
    setIdUserLogged(idParse);
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch(setInitialState());
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <React.Fragment>
      <h1>Bem-vindo a pagina de recados, </h1>
      <Box>
        <Button variant="contained" type="button" onClick={logout}>
          Logout
        </Button>
      </Box>
      <hr />
      <ErrandsList />
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
    </React.Fragment>
  );
};
