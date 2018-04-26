import React from 'react';
import beans  from '../assets/img/beans.jpg';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <style>{`
          #navbar a{
            text-decoration: none;
            color: darkgray;
          }

        `}</style>
      <div id='navbar' style={navStyles}>
        <Link to="/">Rainy Day Coffee Roasters</Link>
        <Link to="/coffee">Coffee</Link>
        <Link to="/newcoffee">Add Coffee</Link>
      </div>


      <div>
        <div style={HeaderStyles}>
          <h1>Sourcing, roasting and serving coffees that we love.</h1>
        </div>
      </div>
    </div>
  );
}

var navStyles = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '10fr 1fr 1fr',
  textAlign: 'left',
  lineHeight: '50px',
  padding: '15',
  backgroundColor: 'whitesmoke',
  color: 'dimgray',
  fontSize: '1.5rem'
}

var HeaderStyles = {
  backgroundImage: `url(${beans})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  padding: '590',
  color: 'white',
  fontSize: '20px'


}

export default Header;
