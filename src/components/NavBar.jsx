import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to={'/test'}>LAB - Wiki Countries</Link>
    </div>
  );
};

export default NavBar;
