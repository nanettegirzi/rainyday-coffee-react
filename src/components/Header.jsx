import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Rainy Day Coffee Roasters</h1>
      <Link to="/">Home</Link> | <Link to="/coffee">Coffee</Link> | <Link to="/visit">Visit</Link>
      </div>
    );
  }

  export default Header;
