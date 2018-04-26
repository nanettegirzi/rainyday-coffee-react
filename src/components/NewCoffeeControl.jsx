import React from 'react';

class NewCoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleonPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    return (
      <div>
        <p>This is the NewCoffeeComponent</p>
        <strong onClick={this.handleClick}>Click me to change my state</strong>
      </div>
    );
  }
}

export default NewCoffeeControl;
