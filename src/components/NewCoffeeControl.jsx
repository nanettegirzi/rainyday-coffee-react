import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewCoffeeForm from './NewCoffeeForm';

class NewCoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation=this.handleConfirmation.bind(this);
  }

  handleConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewCoffeeForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onConfirmation={this.handleConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>

    );
  }
}

export default NewCoffeeControl;
