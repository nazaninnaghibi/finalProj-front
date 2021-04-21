import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navBar">
      <ul>
        {/* <li className="nav-item">
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/register'>Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/fly'>Flight reservations</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to='/'>Reviews</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
