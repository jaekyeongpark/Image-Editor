import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/Home';
import EditPage from '@/pages/Edit';

import ErrorPage from '@/pages/error/Error';

import { ROUTE_PATH } from '@/constant/routes';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTE_PATH.EDIT,
    element: <EditPage />,
    errorElement: <ErrorPage />,
  }
]);