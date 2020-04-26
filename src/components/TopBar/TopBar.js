import React from 'react';
import recipe from '../../assets/recipe.svg';
import fornoBrisa from '../../assets/forno-brisa-logo.png';

const TopBar = (props) => {
  return (
    <div className="top">
      <div className="top-left">
        {console.log(props)}
        <img onClick={props.toggle} src={recipe} alt="recipe"/>
      </div>
      <div className="top-right">
        <span>Thanks to</span><img src={fornoBrisa} alt="forno brisa logo"/>
      </div>
    </div>
  );
}

export default TopBar;