import React from 'react';
import PhaseTag from '../PhaseTag/PhaseTag';
import PhaseTitle from '../PhaseTitle/PhaseTitle';
import IngredientTitle from '../IngredientTitle/IngredientTitle';
import Separator from '../Separator/Separator';

import classNames from './Ingredients.module.scss';

const Ingredients = (props) => {
  const { showIngredients } = props;
  const { flour, twoFlours,  waterFirstStep, waterSecondStep, salt } = props.ingredients;
  
  return showIngredients ? (
    <>   
      <div className={classNames.madreIngredients}>
        <PhaseTag>Prima fase</PhaseTag>
        <PhaseTitle>Autolisi</PhaseTitle>
        <IngredientTitle>Farina</IngredientTitle>
        <p>{flour} g di Tipo 2)</p>
        <IngredientTitle>In alternativa</IngredientTitle>
        <p>
          {twoFlours} g di Tipo 2 + {twoFlours} g di un altro tipo di farina
        </p>
        <Separator/>
        <IngredientTitle>Acqua</IngredientTitle>
        <p>{waterFirstStep} g</p>
      </div>
      <div className={classNames.madreIngredients}>
        <PhaseTag>Seconda fase</PhaseTag>
        <PhaseTitle>Impasto</PhaseTitle>
        <IngredientTitle>Sale</IngredientTitle>
        <p>{salt} g</p>
        <Separator/>
        <IngredientTitle>Acqua</IngredientTitle>
        <p>{waterSecondStep} g</p>
      </div>
    </>
  ) : null;
};

export default Ingredients;
