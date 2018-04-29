import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Do you have permission to add coffee?</p>
        <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmation: PropTypes.func
};


export default ConfirmationQuestions;
