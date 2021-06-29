import React from 'react';

import s from './style.module.scss';

const BasicTextarea = ({ label, rows = 3, register, error, htmlFor, defaultValue = '' }) => {
  return (
    <p className={s.basic_textarea}>
      <label className={`${s.label} ${error ? s.label_error : ''}`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <textarea className={`${s.textarea} ${error ? s.textarea_error : ''}`}
        rows={rows}
        id={htmlFor}
        defaultValue={defaultValue}
        {...register}
      />
      <span className={s.error}>{error ? error.message : ''}</span>
    </p>
  );
};

export default BasicTextarea;
