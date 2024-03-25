//base
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//for redux
import store from './redux/store'
import {Provider} from 'react-redux'
//for react router
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
//import components
import App from './App.jsx'
import CardDetails from './pages/CardDetails.jsx'
import CardsPage from './pages/CardsPage.jsx'
import HomePage from './pages/HomePage.jsx'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/cards',
        element: <CardsPage />,
      },
      {
        path: '/cards/:id',
        element: <CardDetails />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
