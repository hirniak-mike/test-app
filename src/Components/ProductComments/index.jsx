import React from 'react';

import { CommentInput, CommentsList } from '../../Components';

import s from './style.module.scss';

const ProductComments = () => {
  return (
    <div className={s.product_comments}>
      <CommentInput />
      <CommentsList />
    </div>
  );
};

export default ProductComments;
