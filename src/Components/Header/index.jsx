import React from 'react';

import s from './style.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="main_container">
        <span className={s.logo}>Logo</span>
      </div>
    </header>
  );
};

export default Header;
