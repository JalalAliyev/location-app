import React, { useReducer, useEffect } from 'react';

import { validate } from '../../../util/validators.container';
import './input.style.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
    case 'TOUCH':
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const Imput = ({
  id,
  type,
  element,
  placeholder,
  rows,
  label,
  errorMessage,
  validators,
  onInput,
  initialValue,
  initialValid,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  });
  const { value, isTouched, isValid } = inputState;

  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      payload: e.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const el =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
      />
    );
  return (
    <div
      className={`form-control ${
        !isValid && isTouched && 'form-control-invalid'
      }`}>
      <label htmlFor={id}>{label}</label>
      {el}
      {!isValid && isTouched && <p>{errorMessage}</p>}
    </div>
  );
};

export default Imput;
