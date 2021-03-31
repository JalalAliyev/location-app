import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../main-header/main-header.component';
import NavLinks from '../nav-links/nav-links.component';
import SideDrawer from '../side-drawer/side-drawer.component';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsMap } from 'react-icons/bs';
import './main-navigation.style.scss';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const changeDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <React.Fragment>
      <SideDrawer show={isDrawerOpen} onDrawer={changeDrawer}>
        <nav className="main-navigation_drawer-nav">
          <NavLinks onDrawer={changeDrawer} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
            <BsMap style={{ color: 'white', marginLeft: '1rem' }} />
          </Link>
        </h1>
        <button className="main-navigation__menu-btn">
          <GiHamburgerMenu
            onClick={changeDrawer}
            style={{ color: 'white', fontSize: '1.6rem' }}
          />
        </button>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
