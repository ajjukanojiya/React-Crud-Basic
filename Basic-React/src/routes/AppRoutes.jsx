import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';    
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';  
import Register2 from '../pages/Register2'; 



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;