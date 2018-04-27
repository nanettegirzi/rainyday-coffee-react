import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewCoffeeForm from './NewCoffeeForm';

class NewCoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick=this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({formVisibleonPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewCoffeeForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>

    );
  }
}

export default NewCoffeeControl;
