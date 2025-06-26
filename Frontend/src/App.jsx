import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home'
import FoodDeliveryMenu from './Pages/Menu_Page';

function App() {

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FoodDeliveryMenu />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
