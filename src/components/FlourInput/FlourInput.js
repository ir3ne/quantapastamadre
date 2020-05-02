import React from 'react';
import classNames from './FlourInput.module.scss';
import clear from '../../assets/images/clear.svg';

const FlourInput = (props) => {
  const { onFlourQtyChange , flourQty, clearInput } = props;

  return (
    <div className={classNames.flourInputContainer}>
      <div className={classNames.flourInputWrapper}>
        <input
          type="number"
          id="flour"
          className={classNames.flourInput}
          onChange={(e) => {
            onFlourQtyChange(e.target.value);
          }}
        />
       <button
          id="clearInput"
          className={classNames.flourInputClearBtn}
          onClick={clearInput}
          disabled={flourQty > 0 ? false : true}
          >
          <img src={clear} alt="" />
        </button>
      </div>
      <div className={classNames.quantityMetric}>
        <span>g</span>
      </div>
    </div>
  );
};

export default FlourInput;
