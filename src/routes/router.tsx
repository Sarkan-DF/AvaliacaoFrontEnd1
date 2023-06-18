/* eslint-disable react/react-in-jsx-scope */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

export const MainRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};
