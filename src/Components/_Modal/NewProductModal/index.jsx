import React from 'react';
import { inject } from 'mobx-react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

import { BasicInput, BasicTextarea } from '../../../Components';
import validation from '../../../Res/Consts/validationForms';

import s from './style.module.scss';

const NewProductModal = ({ isOpen, handleClose, productsStore: { saveProduct, isSaving } }) => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validation.create_product),
  });

  const onSubmit = (data) => saveProduct(data, () => {
    handleClose();
    reset();
  });

  return (
    <Dialog className={s.new_product} open={isOpen} onClose={handleClose}>
      <DialogTitle>
        Add new product
      </DialogTitle>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <BasicInput type='text' label='Name' htmlFor='name_create'
          register={register('name')}
          error={errors.name}
        />
        <BasicInput type='text' label='Image Url' htmlFor='imageUrl_create'
          register={register('imageUrl')}
          error={errors.imageUrl}
        />
        <BasicInput type='number' label='Count' htmlFor='count_create'
          register={register('count')}
          error={errors.count}
        />
        <BasicInput type='number' label='Weight (grams)' htmlFor='weight_create'
          register={register('weight')}
          error={errors.weight}
        />
        <BasicInput type='number' label='Width (cm)' htmlFor='width_create'
          register={register('width')}
          error={errors.width}
        />
        <BasicTextarea label='Description' htmlFor='desc_create'
          register={register('desc')}
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

export default inject('productsStore')(NewProductModal);
