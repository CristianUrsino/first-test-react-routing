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
import CardDetails from './pages/CardDetailsPage.jsx'
import CardsPage from './pages/CardsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NewCityPage from './pages/NewCityPage.jsx'
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
        path: '/cities',
        element: <CardsPage />,
      },
      {
        path: '/cities/:id',
        element: <CardDetails />,
      },
      {
        path: '/new-city',
        element: <NewCityPage />,
      },
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
