import React from 'react';

import s from './style.module.scss';

const BasicInput = ({ type, label, register, error, htmlFor, defaultValue = '' }) => {
  return (
    <p className={s.basic_input}>
      <label className={`${s.label} ${error ? s.label_error : ''}`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input className={`${s.input} ${error ? s.input_error : ''}`}
        id={htmlFor}
        type={type}
        defaultValue={defaultValue}
        {...register}
      />
      <span className={s.error}>{error ? error.message : ''}</span>
    </p>
  );
};

export default BasicInput;
