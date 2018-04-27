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
        <p></p>
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
  position: 'fixed',
  gridTemplateColumns: '2fr 8fr 1fr 1fr',
  textAlign: 'center',
  lineHeight: '50px',
  padding: '5',
  backgroundColor: 'whitesmoke',
  color: 'dimgray',
  fontSize: '20px'
}

var HeaderStyles = {
  backgroundImage: `url(${beans})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  padding: '300',
  color: 'white',
  fontSize: '20px',

}

export default Header;
