import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { SortSelect } from '../../Components';
import { NewProductModal } from '../../Components/_Modal';

import s from './style.module.scss';

const ControlProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={s.control_product}>
        <SortSelect />
        <Button
          variant="contained"
          color="primary"
          size='small'
          onClick={toggleOpen}
        >
          New Product
        </Button>
      </div>
      <NewProductModal isOpen={isOpen} handleClose={toggleOpen} />
    </>
  );
};

export default ControlProduct;
