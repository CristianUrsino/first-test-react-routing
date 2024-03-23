//hooks
import { useState } from 'react'
//styles
import './App.css'
//components
import NavbarComponent from './components/NavbarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
//routing
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div className="app">
      <NavbarComponent />
      <div>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default App
