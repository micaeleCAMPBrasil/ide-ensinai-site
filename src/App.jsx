import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import SaibaMais from './SaibaMais'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/saibaMais" element={<SaibaMais />} />
      </Routes>
    </Router>
  )
}

export default App