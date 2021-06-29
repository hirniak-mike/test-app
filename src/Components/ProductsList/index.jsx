import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';

import { ProductCard } from '../../Components';

import s from './style.module.scss';

const ProductsList = ({ productsStore: { deleteProduct, products, sortProducts, sortTypes } }) => {

  useEffect(() => sortProducts(), [sortTypes]);

  if (!products.length) {
    return (
      <div className={s.empty_products}>
        No products
      </div>
    );
  };
  return (
    <div className={s.products_list}>
      {products.map(({ id, imageUrl, name, count, desc }) => (
        <ProductCard key={id}
          id={id}
          imageUrl={imageUrl}
          name={name}
          count={count}
          desc={desc}
          deleteProduct={deleteProduct}
        />
      ))}
      <div className={s.fake_card} />
      <div className={s.fake_card} />
    </div>
  );
};

export default inject('productsStore')(observer(ProductsList));
