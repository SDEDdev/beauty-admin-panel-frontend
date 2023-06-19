import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import RootLauout from './components/layout/RootLauout';
import Login from './pages/Login';

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
        path: "/admin",
        element: <div>admin</div>,
      }
    ],
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


