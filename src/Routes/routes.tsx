import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Test from '../page/test/test'
import AboutUs from '../page/AboutUs/AboutUs'

const routes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/About" element={<AboutUs />} />
        </Routes>
    </div>
  )
}

export default routes
