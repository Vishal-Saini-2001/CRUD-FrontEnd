import './App.css';
import Logedin from './comps/Logedin';
import Login from './comps/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './comps/Register';
import ForgotPas from './comps/ForgotPas';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/logedin' element={<Logedin />}></Route>
        <Route exact path='/forgot' element={<ForgotPas />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
