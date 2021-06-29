import React from 'react';
import { inject, observer } from 'mobx-react';

import { CommentItem } from '../../Components';

import s from './style.module.scss';

const CommentsList = ({ productsStore: { product: { comments, id }, removeComment } }) => {
  if (!comments.length) {
    return (
      <div className={s.no_comments}>No comments...</div>
    );
  };
  return (
    <ul className={s.comments_list}>
      {comments.slice().reverse().map((comment) => (
        <CommentItem key={comment.commentId}
          com_obj={comment}
          idColl={id}
          date={comment.date}
          comment_text={comment.description}
          removeComment={removeComment}
        />
      ))}
    </ul>
  );
};

export default inject('productsStore')(observer(CommentsList));
