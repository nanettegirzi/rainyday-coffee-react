import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props){
  return (

    <div>
      <style jsx>{`
          div {
            background-color: lightgrey;
          }
        `}</style>
      <h3>Browse Products</h3>
      <p>{props.name}</p>
      <p>From: <b>{props.price}</b></p>
    </div>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Coffee;
