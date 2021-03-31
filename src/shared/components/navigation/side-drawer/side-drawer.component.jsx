import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { VscClose } from 'react-icons/vsc';
import './side-drawer.style.scss';

const SideDrawer = ({ children, onDrawer, show }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit>
      <aside className="side-drawer">
        <span className="side-drawer__closer">
          <VscClose
            style={{ cursor: 'pointer', fontSize: '1.6rem', color: 'red' }}
            onClick={onDrawer}
          />
        </span>{' '}
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
