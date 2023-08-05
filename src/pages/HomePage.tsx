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

  const user = useSelector((state: RootState) => state.user.data);

  const [erro, setErro] = useState(undefined);

  // useEffect(() => {
  //   // dispatch(listErrandsAction({ id: 'c9ca7590-0978-4dbb-b29d-5328e7e804fe' }));
  //   const isUserLogged = !!user.idUser;
  //   if (!isUserLogged) {
  //     navigate('/login');
  //     return;
  //   }

  //   listApi();
  // }, []);

  const listApi = async () => {
    // const result = await dispatch(
    //   listErrandsAction({
    //     // idUser: 'e7d9ddf8-48ef-4651-9815-b5b93ca74b57'
    //     idUser: user.idUser
    //   })
    // );
    // console.log(user.idUser);
    // if (!result.payload.ok) {
    //   if (result.payload.message === 'User not found.') {
    //     navigate('/login');
    //     return;
    //   }
    //   setErro(result.payload.message);
    // }
  };

  return (
    <React.Fragment>
      <h1>Bem-vindo a pagina de recados, </h1>
      <hr />
      <ErrandsList />
      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
    </React.Fragment>
  );
};
