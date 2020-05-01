import React from 'react';
import classNames from './CalcButton.module.scss';

const CalcButton = (props) => {
  const { loadIngredients, flourQty } = props;
  return (
    <button
      className={classNames.calcButton}
      onClick={loadIngredients}
      disabled={flourQty > 0 ? false : true}
    >
      Calculate
    </button>
  );
};

export default CalcButton;
