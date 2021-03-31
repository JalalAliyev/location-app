import React from 'react';
import { Link } from 'react-router-dom';

import './button.style.scss';

const Button = ({
  href,
  to,
  size,
  inverse,
  danger,
  children,
  exact,
  type,
  onClick,
  disabled,
}) => {

  const className = `button button-${size || 'default'} ${
    inverse && 'button-inverse'
  } ${danger && 'button-danger'}`;
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link to={to} exact={exact} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
