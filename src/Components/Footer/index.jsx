import React from 'react';

import s from './style.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="main_container">
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque porro quaerat tempore,
          in natus quas molestias iste, neque blanditiis necessitatibus dolor error odio? Modi, possimus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
