import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import RootLauout from './components/layout/RootLauout';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLauout />,
    children: [
      {
        path: "/account/login",
        element: <Login />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      }
    ],
  },
]);

axios.defaults.baseURL = process.env.API_BACKEND || 'http://127.0.0.1:3000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


