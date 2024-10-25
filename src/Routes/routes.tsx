import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from '../page/test/test'

const routes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Test/>} />
        </Routes>
          
    </div>
  )
}

export default routes
