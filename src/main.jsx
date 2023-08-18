import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom';
import './assets/styles';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import GoFundMe from './routes/GoFundMe';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <GoFundMe />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
