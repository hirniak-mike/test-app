import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from '@material-ui/core';

import { EditProductModal } from '../../Components/_Modal';

import s from './style.module.scss';

const ProductItem = ({ productsStore: { product } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={s.product_wrapper}>
        <div className={s.product_top}>
          <div className={s.image_wrapper}>
            <img src={product.imageUrl} alt='product_image' className={s.product_image} />
          </div>
          <div className={s.product_characteristic}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.btn_wrapper}>
              <Button variant="contained" color="primary" onClick={toggleOpen}>
                Edit
              </Button>
            </div>
            {!product.count ?
              <p className={`${s.character_item} ${s.not_available}`}>Not available</p> :
              <p className={s.character_item}>{`Count: ${product.count}`}</p>
            }
            <p className={s.character_item}>{`Weight: ${product.weight} grams`}</p>
            <p className={s.character_item}>{`Width: ${product.width} cm`}</p>
          </div>
        </div>
        <div className={s.product_desc}>
          <h3 className={s.desc_title}>Description:</h3>
          {product.desc}
        </div>
      </div>
      <EditProductModal isOpen={isOpen} handleClose={toggleOpen} />
    </>
  );
};

export default inject('productsStore')(observer(ProductItem));
