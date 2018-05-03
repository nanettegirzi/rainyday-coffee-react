import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';

function CoffeeList(props){
  return (
    <div>
      <h1>Browse Products</h1>
      <hr/>
      {props.coffeeList.map((coffee, index) =>
        <Coffee
          name={coffee.name}
          price={coffee.price}
          key={index}/>
      )}
    </div>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;
