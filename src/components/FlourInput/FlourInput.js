import React, { useRef, useEffect, useState } from 'react';
import classNames from './FlourInput.module.scss';
import clear from '../../assets/images/clear.svg';

const FlourInput = (props) => {
  const { onFlourQtyChange, clearInput } = props;
  const [flourQty, setFlourQty] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setFlourQty(newValue);
    onFlourQtyChange(newValue);
  };

  const handleClearInput = () => {
    setFlourQty('');
    clearInput();
  };

  return (
    <div className={classNames.flourInputContainer}>
      <div className={classNames.flourInputWrapper}>
        <input
          type="number"
          id="flour"
          className={classNames.flourInput}
          value={flourQty}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button
          id="clearInput"
          className={classNames.flourInputClearBtn}
          onClick={handleClearInput}
          disabled={!flourQty}
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
