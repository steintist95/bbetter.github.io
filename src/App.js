import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Pictures from './pages/pictures';
import Store from './pages/store';
import SignUp from './pages/signup';
import LoginForm from './pages/signin';
import Schedule from './pages/schedule';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/store' exact component={Store} />
        <Route path='/pictures' exact component={Pictures} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={LoginForm} />
        <Route path='/schedule' exact component={Schedule}/>
      </Switch>
    </Router>
  );
}

export default App;
