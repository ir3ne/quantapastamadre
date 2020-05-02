import React from 'react';
import PhaseTag from '../PhaseTag/PhaseTag';
import PhaseTitle from '../PhaseTitle/PhaseTitle';
import IngredientTitle from '../IngredientTitle/IngredientTitle';
import Separator from '../Separator/Separator';

import classNames from './Ingredients.module.scss';

const Ingredients = (props) => {
  const { showIngredients } = props;
  const { flour, twoFlours, salt, water } = props.ingredients;
  
  return showIngredients ? (
    <>   
      <div className={classNames.madreIngredients}>
        <PhaseTag>Prima fase</PhaseTag>
        <PhaseTitle>Autolisi</PhaseTitle>
        <IngredientTitle>Farina</IngredientTitle>
        <p>{flour} g</p>
        <IngredientTitle>In alternativa</IngredientTitle>
        <p>
          {twoFlours} g di un tipo di farina + {twoFlours} g di un altro tipo di farina
        </p>
        <Separator/>
        <IngredientTitle>Salt</IngredientTitle>
        <p>{salt} g</p>
        <Separator/>
        <IngredientTitle>Water</IngredientTitle>
        <p>{water} g</p>
      </div>
      <div className={classNames.madreIngredients}>
        <PhaseTag>Seconda fase</PhaseTag>
        <PhaseTitle>Impasto</PhaseTitle>
        <IngredientTitle>Salt</IngredientTitle>
        <p>{salt} g</p>
        <Separator/>
        <IngredientTitle>Water</IngredientTitle>
        <p>remaining water</p>
      </div>
    </>
  ) : null;
};

export default Ingredients;
