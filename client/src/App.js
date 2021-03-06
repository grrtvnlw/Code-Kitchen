import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path="/recipes/new" exact component={RecipeForm} />
          <Route path="/recipes/:id" component={RecipeDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
