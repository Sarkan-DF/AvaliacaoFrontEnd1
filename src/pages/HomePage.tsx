import React, { useEffect, useState } from 'react';
import { ErrandsList } from '../components/errandsList';
import { useDispatch, useSelector } from 'react-redux';
// import { listTransactionsAction } from '../store/modules/errands.slice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { TransactionType } from '../models/errands.model';
import { listErrandsAction } from '../store/modules/errands.slice';

export const HomePage = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const [erro, setErro] = useState(undefined);

  useEffect(() => {
    dispatch(listErrandsAction());
  }, []);

  // const listApi = async () => {
  //   const result = await dispatch(
  //     listTransactionsAction({
  //       id: user.id,
  //       type: TransactionType.Income
  //     })
  //   );

  //   if (!result.payload.ok) {
  //     if (result.payload.message === 'User not found.') {
  //       navigate('/login');
  //       return;
  //     }

  //     setErro(result.payload.message);
  //   }

  //   console.log(erro);
  // };

  // useEffect(() => {
  //   const isUserLogged = !!user.id;

  //   if (!isUserLogged) {
  //     navigate('/login');
  //     return;
  //   }

  //   listApi();
  // }, []);

  return (
    <React.Fragment>
      <h1>Bem-vindo a pagina de recados, {user.name}</h1>
      <hr />
      <ErrandsList />
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
    </React.Fragment>
  );
};
