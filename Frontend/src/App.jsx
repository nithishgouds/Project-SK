
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from "./Pages/Admin.jsx";
import "./index.css"
function App() {


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />

        </Routes>
    </Router>
  )
}

export default App
