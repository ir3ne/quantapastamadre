import React from 'react';
import classNames from './FlourInput.module.scss';

const FlourInput = (props) => {
  const { onFlourQtyChange } = props;

  return (
    <div className={classNames.flourInputContainer}>
      <input
        type="number"
        id="flour"
        className={classNames.floutInput}
        onChange={(e) => {
          onFlourQtyChange(e.target.value);
        }}
      />
      <div className={classNames.quantityMetric}>
        <span>g</span>
      </div>
    </div>
  );
};

export default FlourInput;
