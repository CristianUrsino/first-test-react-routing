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
import CardDetails from './components/CardDetails.jsx'
import CardsComponent from './components/CardsComponent.jsx'
import HomeComponent from './components/HomeComponent.jsx'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeComponent />,
      },
      {
        path: '/cards',
        element: <CardsComponent />,
      },
      {
        path: '/card-details',
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
