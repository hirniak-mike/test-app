import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { ConfirmModal } from '../../Components/_Modal';

import s from './style.module.scss';

const CommentItem = ({ date, comment_text, removeComment, idColl, com_obj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleDelete = () => removeComment(idColl, com_obj);

  return (
    <>
      <li className={s.comment}>
        <p className={s.comment_desc}>
          <span className={s.date}>{date}</span>
          <span className={s.comment_text}>{comment_text}</span>
        </p>
        <DeleteForeverIcon className={s.delete} color='error' fontSize='small'
          onClick={toggleOpen}
        />
      </li>
      <ConfirmModal isOpen={isOpen}
        handleClose={toggleOpen}
        callback={handleDelete}
        title='Do you really want to delete?'
        btn_confirm='delete'
        btn_close='cancel'
      />
    </>
  );
};

export default CommentItem;
