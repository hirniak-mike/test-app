import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Loader from "react-spinners/ClipLoader";

import { ProductsList, ControlProduct } from '../../Components';

import s from './style.module.scss';

const AllProducts = ({ productsStore: { isLoadedProducts, getProducts } }) => {
  useEffect(() => getProducts(), []);

  if (!isLoadedProducts) {
    return (
      <div className='loader_wrapper'>
        <Loader color={"#233156"} loading={true} size={100} />
      </div>
    );
  };
  return (
    <main className={s.all_products}>
      <div className="main_container">
        <ControlProduct />
        <ProductsList />
      </div>
    </main >
  );
};

export default inject('productsStore')(observer(AllProducts));
