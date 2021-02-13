import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Recettes from './containers/Recettes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recettes} />
      </Switch>
    </Router>
  );
}

export default App;
