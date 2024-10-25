import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes/routes'

function App() {

  return (
    <>
      <div>
        <Router>
          <AppRoutes />
        </Router>
      </div>

    </>
  )
}

export default App
