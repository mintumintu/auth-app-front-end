// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Login />
    // <Routes>
    //   <Route path='/' element={<><Navbar /><Login /></>} />
    //   <Route path='/register' element={<Register />} />
    //   <Route path='/login' element={<Login />} />
    //   <Route path='/dashboard' element={<Dashboard/>} />
    // </Routes>
  );
}

export default App;
