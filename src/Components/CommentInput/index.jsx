import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@material-ui/core';

import validation from '../../Res/Consts/validationForms';

import s from './style.module.scss';

const CommentInput = ({ productsStore: { addComment, product } }) => {
  const { id } = useParams();

  const { handleSubmit, register, reset, setError, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(validation.add_comment),
  });

  const onSubmit = (data) => {
    addComment(id, {
      ...data,
      commentId: uuidv4(),
      date: moment().format("MMMM Do YYYY, kk:mm:ss"),
    });
    reset();
  };

  useEffect(() => setError('description', { message: 'Empty field' }), []);

  return (
    <form className={s.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <textarea placeholder="Enter your comment..." type="text"
        rows='3'
        className={s.textarea_comment}
        {...register("description")}
      />
      <Button type='submit' variant="contained" color="primary" size='small'
        disabled={!!errors?.description}
      >
        Add comment
      </Button>
    </form>
  );
};

export default inject('productsStore')(CommentInput);
