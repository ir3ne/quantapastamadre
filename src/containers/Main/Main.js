import React from 'react';
import FlourInput from '../../components/FlourInput/FlourInput';
import CalcButton from '../../components/CalcButton/CalcButton';

import classNames from './Main.module.scss';

const Main = (props) => {
  const { onFlourQtyChange, flourQty, clearInput,   loadIngredients } = props;

  return (
    <main className={classNames.main}>
      <div className={classNames.instruction}>Inserisci i grammi di farina</div>
      <FlourInput onFlourQtyChange={onFlourQtyChange} flourQty={flourQty} clearInput={clearInput} />
      <CalcButton flourQty={flourQty} loadIngredients={loadIngredients} />
    </main>
  );
};

export default Main;
