import React from 'react';
import Header from './Header';
import CoffeeList from './CoffeeList';
import { Switch, Route } from 'react-router-dom';
import Visit from './Visit';
import Home from './Home';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/coffee' component={CoffeeList} />
        <Route path='/visit' component={Visit} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
