import React, { useEffect } from 'react';

import { Header, Footer } from '../../Components';

import s from './style.module.scss';

const BasicPage = ({ children }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className={s.basic_page}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BasicPage;
