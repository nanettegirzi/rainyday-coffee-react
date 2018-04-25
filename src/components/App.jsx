import React from 'react';
import Header from './Header';
import CoffeeList from './CoffeeList';
import { Switch, Route } from 'react-router-dom';
import Visit from './Visit';
import Home from './Home';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/coffee' component={CoffeeList} />
        <Route path='/visit' component={Visit} />
      </Switch>
    </div>
  );
}

export default App;
