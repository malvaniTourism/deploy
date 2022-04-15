// import './App.css';
import './assets/styles/styles.css';
import { Switch, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/mains/Home';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
