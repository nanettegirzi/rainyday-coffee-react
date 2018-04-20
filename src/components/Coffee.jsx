import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
      <div>
        <h3>Browse Products</h3>
        <p>{props.name}</p>
        <p>From: <b>{props.price}</b></p>
        <hr/>
      </div>
   );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Coffee;