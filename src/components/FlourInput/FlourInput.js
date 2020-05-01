import React from 'react';
import classNames from './FlourInput.module.scss';
import clear from '../../assets/images/clear.svg';

const FlourInput = (props) => {
  const { onFlourQtyChange , flourQty } = props;
  const btnVisibility = {
    opacity: 1
  }

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
       <span
          id="clearInput"
          class={classNames.flourInputClearBtn}
          style={flourQty > 0 ? btnVisibility : null }
          >
          <img src={clear} alt="" />
        </span>
      </div>
      <div class={classNames.quantityMetric}>
        <span>g</span>
      </div>
    </div>
  );
};

export default FlourInput;
