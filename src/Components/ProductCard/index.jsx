import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { PRODUCT_ITEM } from '../../Res/Consts/routerUrl';
import { ConfirmModal } from '../../Components/_Modal';

import s from './style.module.scss';

const ProductCard = ({ imageUrl, name, desc, count, id, deleteProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleDelete = () => deleteProduct(id);

  return (
    <>
      <div className={s.product_card}>
        <Link to={`${PRODUCT_ITEM}${id}`}>
          <div className={s.img_wrapper}>
            <img className={s.product_img}
              src={imageUrl}
              alt="product_image"
            />
          </div>
          <p className={`${s.product_desc} ${s.product_name}`}>{name}</p>
          <p className={s.product_desc}>{desc}</p>
          {!count ?
            <p className={`${s.not_available} ${s.product_count}`}>Not available</p> :
            <p className={s.product_count}>{`Count: ${count}`}</p>
          }
        </Link>
        <HighlightOffIcon className={s.delete_icon} onClick={toggleOpen} />
      </div>
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

export default ProductCard;
