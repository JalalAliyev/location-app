import React from 'react';

import './main-header.style.scss';

const MainHeader = ({ children }) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
