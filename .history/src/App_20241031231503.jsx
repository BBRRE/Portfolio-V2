import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Archi from './Subjects/Archi.jsx'
import CompSci from './Subjects/CompSci.jsx'
import EEng from './Subjects/EEng.jsx'
import Other from './Subjects/Other.jsx'
import { HomePage } from './HomePage'

function App() {

  return (
    <>
      <Router>
        
            <Routes>
              
                <Route path="/" element={<HomePage />} />
                <Route path="/Architecture" element={<Archi />} />
                <Route path="/Electronic Eng" element={<EEng />} />
                <Route path="/Computer Sci" element={<CompSci />} />
                <Route path="/Other" element={<Other />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
