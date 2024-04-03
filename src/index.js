import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Drinks, { loader as DrinksLoader } from './Drinks';
import Foods, { loader as FoodsLoader } from './Foods';
import Customers, { loader as CustomersLoader } from './Customers';
import Waiters, { loader as WaitersLoader } from './Waiters';
import Orders, { loader as OrdersLoader } from './Orders';
import Main, { loader as MainLoader } from './Main';
import Login, { loader as LoginLoader } from './Login';
import Neworder, { loader as NeworderLoader } from './Neworder';
import {
  createBrowserRouter,


  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './Store';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        path: "/main",
        element: <Main />,
        loader: MainLoader
      },

      {
        path: "/drinks",
        element: <Drinks />,
        loader: DrinksLoader
      },

      {
        path: "/foods",
        element: <Foods />,
        loader: FoodsLoader
      },
      {
        path: "/customers",
        element: <Customers />,
        loader: CustomersLoader
      },
      {
        path: "/Waiters",
        element: <Waiters />,
        loader: WaitersLoader
      },

      {
        path: "/Orders",
        element: <Orders />,
        loader: OrdersLoader
      },
      {
        path: "/Login",
        element: <Login />,
        loader: LoginLoader
      },
      {
        path: "/Neworder",
        element: <Neworder />,
        loader: NeworderLoader
      },
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
