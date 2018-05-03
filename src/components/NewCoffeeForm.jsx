import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewCoffeeForm(props) {
  let _name = null;
  let _price = null;

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({name: _name.value, price: _price.value, id: v4()});
    _name.value = '';
    _price.value = '';
  }

  return (
    <div>
      <br></br>
      <form onSubmit={handleNewCoffeeFormSubmission}>
      <input
        type='text'
        id="name"
        placeholder="Coffee Name"
        ref={(input) => {_name = input;}}/>
      <input
        type='text'
        id='price'
        placeholder='Price'
        ref={(input) => {_price = input;}}/>
      <button type='submit'>Add New Coffee</button>
      </form>
    </div>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;
