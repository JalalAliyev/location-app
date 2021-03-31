import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { VscClose } from 'react-icons/vsc';
import './modal.style.scss';

const ModalOverlay = ({
  className,
  headerClass,
  contentClass,
  footerClass,
  style,
  header,
  onSubmit,
  children,
  footer,
  onCancel,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
        <span className="modal__header-closer" onClick={onCancel}>
          <VscClose
            style={{ cursor: 'pointer', fontSize: '1.6rem', color: 'red' }}
            onClick={onCancel}
          />
        </span>
      </header>
      <form
        style={{ height: '80%' }}
        onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        {footer && (
          <footer onClick={onCancel} className={`modal__footer ${footerClass}`}>
            {footer}
          </footer>
        )}
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = ({ onCancel, show, ...rest }) => {
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal">
      <ModalOverlay onCancel={onCancel} {...rest} />
    </CSSTransition>
  );
};

export default Modal;
