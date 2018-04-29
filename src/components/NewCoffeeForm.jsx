import React from 'react';

function NewCoffeeForm() {
  return (
    <div>
      <br></br>
      <form>
      <input
        type='text'
        id="name"
        placeholder="Coffee Name" />
      <input
        type='text'
        id='price'
        placeholder='Price'/>
      <button type='submit'>Add New Coffee</button>
      </form>
    </div>
  );
}

export default NewCoffeeForm;
