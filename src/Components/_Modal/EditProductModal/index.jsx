import React from 'react';
import { inject } from 'mobx-react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

import { BasicInput, BasicTextarea } from '../../../Components';
import validation from '../../../Res/Consts/validationForms';

import s from './style.module.scss';

const EditProductModal = ({ isOpen, handleClose, productsStore: { editProduct, product, isSaving } }) => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validation.create_product),
  });

  const onSubmit = (data) => editProduct(product.id, data, handleClose);

  return (
    <Dialog className={s.new_product} open={isOpen} onClose={handleClose}>
      <DialogTitle>
        Edit product
      </DialogTitle>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <BasicInput type='text' label='Name' htmlFor='name_edit'
          register={register('name')}
          defaultValue={product.name}
          error={errors.name}
        />
        <BasicInput type='text' label='Image Url' htmlFor='imageUrl_edit'
          register={register('imageUrl')}
          defaultValue={product.imageUrl}
          error={errors.imageUrl}
        />
        <BasicInput type='number' label='Count' htmlFor='count_edit'
          register={register('count')}
          defaultValue={product.count}
          error={errors.count}
        />
        <BasicInput type='number' label='Weight (grams)' htmlFor='weight_edit'
          register={register('weight')}
          defaultValue={product.weight}
          error={errors.weight}
        />
        <BasicInput type='number' label='Width (cm)' htmlFor='width_edit'
          register={register('width')}
          defaultValue={product.width}
          error={errors.width}
        />
        <BasicTextarea label='Description' htmlFor='desc_edit'
          register={register('desc')}
          defaultValue={product.desc}
          error={errors.desc}
        />
        <DialogActions className={s.btn_wrapper}>
          <Button type="submit" variant="contained" color="primary" size="small" disabled={isSaving}>
            Save
          </Button>
          <Button variant="contained" size="small" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default inject('productsStore')(EditProductModal);