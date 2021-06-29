import React from 'react';
import { Link } from 'react-router-dom';

import { ALL_PRODUCTS } from '../../Res/Consts/routerUrl';

import s from './style.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="main_container">
        <Link to={ALL_PRODUCTS} className={s.logo}>Logo</Link>
      </div>
    </header>
  );
};

export default Header;
