// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
  <Router>
    <Switch>
      <Router path='/' exact>
      <Home />
      </Router>
      <Router path='/Login' exact>
        <Login />
      </Router>
      <Router path='/Register' exact>
        <Register />
      </Router>
    </Switch>
  </Router>
  );
}

export default App;
