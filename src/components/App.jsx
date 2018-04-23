import React from 'react';
import Header from './Header';
import CoffeeList from './CoffeeList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={CoffeeList} />
        <Route path='/visit' component={Visit} />
      </Switch>
    </div>
  );
}

export default App;
