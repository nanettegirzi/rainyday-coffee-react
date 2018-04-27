import React from 'react';
import Header from './Header';
import CoffeeList from './CoffeeList';
import { Switch, Route } from 'react-router-dom';
import Visit from './Visit';
import Home from './Home';
import Error404 from './Error404';
import NewCoffeeFrom from './NewCoffeeForm';
import NewCoffeeControl from './NewCoffeeControl';

function App(){
  return (
    <div>
      <style global jsx>{`
          html,body{
            margin: 0px;
            height: 100%;
          }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/coffee' component={CoffeeList} />
        <Route path='/newcoffee' component={NewCoffeeControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
