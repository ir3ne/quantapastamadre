import React from 'react';

const CalcButton = ({ quantity, getResult }) => {
  return (
    <button className="calc" onClick={getResult} disabled={quantity > 0 ? false : true}>
      Calcola
    </button>
  );
};

export default CalcButton;
