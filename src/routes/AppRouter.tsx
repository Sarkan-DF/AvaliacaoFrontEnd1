/* eslint-disable react/react-in-jsx-scope */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CadastroPage } from '../pages/CadastroPage';

export const MainRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/cadastro',
      element: <CadastroPage />
    }
  ]);

  return <RouterProvider router={routes} />;
};
