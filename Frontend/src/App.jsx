
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from "./Pages/Admin.jsx";
import "./index.css"
import FoodDeliveryMenu from "./Pages/Menu_Page.jsx";
function App() {


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/map" element={<FoodDeliveryMenu />} />


        </Routes>
    </Router>
  )
}

export default App
