import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              <BrowserRouter basename={"/Portfolio-V2/"}>
                <Route path="/Portfolio-V2/" element={<HomePage />} />
                <Route path="/Architecture" element={<Archi />} />
                <Route path="/Electronic Eng" element={<EEng />} />
                <Route path="/Computer Sci" element={<CompSci />} />
                <Route path="/Other" element={<Other />} />
                </BrowserRouter>
            </Routes>
        </Router>
    </>
  )
}

export default App
