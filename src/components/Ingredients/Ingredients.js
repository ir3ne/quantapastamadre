import React from 'react';
import PhaseTag from '../PhaseTag/PhaseTag';
import PhaseTitle from '../PhaseTitle/PhaseTitle';
import IngredientTitle from '../IngredientTitle/IngredientTitle';

import classNames from './Ingredients.module.scss';

const Ingredients = (props) => {
  const { flour, twoFlours, sale, aqua } = props.ingredients;

  console.log(props, flour);

  return (
    <>
      <div className={classNames.madreIngredients}>
        <PhaseTag>Prima fase</PhaseTag>
        <PhaseTitle>Autolisi</PhaseTitle>
        <IngredientTitle>Farina</IngredientTitle>
        <p>{flour} g oppure</p>
        <IngredientTitle>In alternativa</IngredientTitle>
        <p>
          {twoFlours} g di un tipo di farina + {twoFlours} g di un altro tipo di farina
        </p>
        <IngredientTitle>Sale</IngredientTitle>
        <p>{sale} g</p>
        <IngredientTitle>Aqua</IngredientTitle>
        <p>{aqua} g</p>
      </div>
      <div className={classNames.madreIngredients}>
        <PhaseTag>Seconda fase</PhaseTag>
        <PhaseTitle>Impasto</PhaseTitle>
        <IngredientTitle>Sale</IngredientTitle>
        <p>{sale} g</p>
        <IngredientTitle>Aqua</IngredientTitle>
        <p>aqua rimanente</p>
      </div>
    </>
  );
};

export default Ingredients;
