import React from 'react';
import { inject, observer } from 'mobx-react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

import { sortByType } from '../../Res/Consts/sortByType';

import s from './style.module.scss';

const SortSelect = ({ productsStore: { sortBy, setSortType } }) => {

  const handleChange = (e) => setSortType(e.target.value);

  return (
    <FormControl className={s.sort_select_wrapper}>
      <InputLabel id="sort_by_type">
        Sort by
      </InputLabel>
      <Select
        className={s.sort_select}
        labelId="sort_by_type"
        value={sortBy}
        onChange={handleChange}
      >
        {sortByType.map(({ id, name, value, img }) => (
          <MenuItem key={id} value={value}>
            <span className={s.menu_item}>{name}{img}</span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default inject('productsStore')(observer(SortSelect));
