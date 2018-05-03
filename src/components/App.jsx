import React from 'react';
import Header from './Header';
import CoffeeList from './CoffeeList';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Error404 from './Error404';
import NewCoffeeFrom from './NewCoffeeForm';
import NewCoffeeControl from './NewCoffeeControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCoffeeList: []
    };
    this.handleAddingNewCoffeeToList = this.handleAddingNewCoffeeToList.bind(this);
  }

  handleAddingNewCoffeeToList(newCoffee) {
    var newMasterCoffeeList = this.state.masterCoffeeList.slice();
    newMasterCoffeeList.push(newCoffee);
    this.setState({masterCoffeeList: newMasterCoffeeList});
  }

  render() {
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
            <Route exact path='/coffee' render={()=><CoffeeList coffeeList={this.state.masterCoffeeList} />} />
            <Route path='/newcoffee' render={()=><NewCoffeeControl onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      );
    }
  }

  export default App;
