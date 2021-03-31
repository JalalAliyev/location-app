import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';
import './nav-links.style.scss';

const NavLinks = ({ onDrawer }) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li onClick={onDrawer}>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li onClick={onDrawer}>
          <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li onClick={onDrawer}>
          <NavLink to="/places/new">Add Place</NavLink>
        </li>
      )}
      {!auth.isLoggedIn ? (
        <li onClick={onDrawer}>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      ) : (
        <li>
          <button onClick={auth.logout}>Log out</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
