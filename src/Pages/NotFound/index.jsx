import React from 'react';
import { Link } from 'react-router-dom';

import { ALL_PRODUCTS } from '../../Res/Consts/routerUrl';

import s from './style.module.scss';

const NotFound = () => {
  return (
    <main className={s.not_found}>
      <div className="main_container">
        <h2 className={s.title}>Oooops, page not found</h2>
        <Link to={ALL_PRODUCTS} className={s.go_to}>Go to the page of all products</Link>
      </div>
    </main>
  );
};

export default NotFound;
