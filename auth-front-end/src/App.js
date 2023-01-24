// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
  <Router>
  <Route>
  <Navbar />
  </Route>
    <Switch>
      <Route path='/' exact>
      <Home />
      </Route>
      <Route path='/Login' exact>
        <Login />
      </Route>
      <Route path='/Register' exact>
        <Register />
      </Route>
      <Route path='/secret' exact>
        <Dashboard />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
