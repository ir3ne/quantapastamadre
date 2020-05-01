import React from 'react';
import classNames from './IngredientTitle.module.scss';

const IngredientTitle = (props) => {
  const { children } = props;

  return <h4 className={classNames.IngredientTitle}>{children}</h4>;
};

export default IngredientTitle;
