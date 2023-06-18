import React, { useEffect, useState } from 'react';
import { TransactionsList } from '../components/TransactionsList';
import { useDispatch, useSelector } from 'react-redux';
import { listTransactionsAction } from '../store/modules/transactions.slice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { TransactionType } from '../models/transaction.model';

export const HomePage = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const [erro, setErro] = useState(undefined);

  const listApi = async () => {
    const result = await dispatch(
      listTransactionsAction({
        id: user.id,
        type: TransactionType.Income,
      })
    );

    if (!result.payload.ok) {
      if (result.payload.message === 'User not found.') {
        navigate('/login');
        return;
      }

      setErro(result.payload.message);
    }

    console.log(erro);
  };

  useEffect(() => {
    const isUserLogged = !!user.id;

    if (!isUserLogged) {
      navigate('/login');
      return;
    }

    listApi();
  }, []);

  return (
    <React.Fragment>
      <h1>Bem vindo, {user.name}</h1>
      <hr />
      <TransactionsList />
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
    </React.Fragment>
  );
};
