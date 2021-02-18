import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Recettes from './containers/Recettes';
import Recette from './containers/showRecette';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recettes} />
        <Route exact path="/recette/:id" component={Recette} />
      </Switch>
    </Router>
  );
}

export default App;
