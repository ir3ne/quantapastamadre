import React from 'react';
import PhaseTag from '../PhaseTag/PhaseTag';
import PhaseTitle from '../PhaseTitle/PhaseTitle';
import IngredientTitle from '../IngredientTitle/IngredientTitle';

import classNames from './Ingredients.module.scss';

const Ingredients = (props) => {
  const { flour, twoFlours, salt, water } = props.ingredients;

  console.log(props, flour);

  return (
    <>
      <div className={classNames.madreIngredients}>
        <PhaseTag>First Step</PhaseTag>
        <PhaseTitle>Autolisi</PhaseTitle>
        <IngredientTitle>Flour</IngredientTitle>
        <p>{flour} g oppure</p>
        <IngredientTitle>In alternativa</IngredientTitle>
        <p>
          {twoFlours} g di un tipo di farina + {twoFlours} g di un altro tipo di farina
        </p>
        <IngredientTitle>Salt</IngredientTitle>
        <p>{salt} g</p>
        <IngredientTitle>Water</IngredientTitle>
        <p>{water} g</p>
      </div>
      <div className={classNames.madreIngredients}>
        <PhaseTag>Second Step</PhaseTag>
        <PhaseTitle>Impasto</PhaseTitle>
        <IngredientTitle>Salt</IngredientTitle>
        <p>{salt} g</p>
        <IngredientTitle>Water</IngredientTitle>
        <p>remaining water</p>
      </div>
    </>
  );
};

export default Ingredients;
