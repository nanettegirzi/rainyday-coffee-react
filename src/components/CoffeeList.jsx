import React from 'react';
import Coffee from './Coffee';

var masterCoffeeList = [
  {
    name: "Night Cap",
    price: "$13.50"
  },
  {
    name: "Ethiopia Gotiti",
    price: "$15.80"
  },
  {
    name: "Colombia Narino Inga",
    price: "$13.90"
  },
  {
    name: "Kenya Kiunyu AA",
    price: "$17.30"
  },
];




function CoffeeList(){
  return (
    <div>
    <hr/>
    {masterCoffeeList.map((coffee, index) =>
      <Coffee name={coffee.name}
      price={coffee.price}
      key={index}/>
    )}
    </div>
  );
}

export default CoffeeList;
