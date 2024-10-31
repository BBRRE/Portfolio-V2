import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Archi from './Subjects/Archi.jsx'
import CompSci from './Subjects/CompSci.jsx'
import EEng from './Subjects/EEng.jsx'
import Other from './Subjects/Other.jsx'
import { HomePage } from './HomePage'
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('App component mounted')
  }, [])

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Portfolio</h1> {/* Add this to test basic rendering */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Architecture" element={<Archi />} />
          <Route path="/Electronic-Eng" element={<EEng />} />
          <Route path="/Computer-Sci" element={<CompSci />} />
          <Route path="/Other" element={<Other />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App