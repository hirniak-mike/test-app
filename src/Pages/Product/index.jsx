import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Loader from "react-spinners/ClipLoader";

import { ProductItem, ProductComments, } from '../../Components';
import { ALL_PRODUCTS } from '../../Res/Consts/routerUrl';

import s from './style.module.scss';

const Product = ({ productsStore: { getProduct, refreshProduct, product } }) => {
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
    return () => refreshProduct();
  }, [])

  if (!Object.keys(product).length) {
    return (
      <div className='loader_wrapper'>
        <Loader color={"#233156"} loading={true} size={100} />
      </div>
    );
  };
  return (
    <main className={s.product}>
      <div className="main_container">
        <Breadcrumbs>
          <Link to={ALL_PRODUCTS}>All products</Link>
          <Typography color="textPrimary">{product.name}</Typography>
        </Breadcrumbs>
        <ProductItem />
        <ProductComments />
      </div>
    </main>
  );
};

export default inject('productsStore')(observer(Product));
