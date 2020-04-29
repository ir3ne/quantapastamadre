import React from 'react';
import pastaMadre from '../../assets/images/quantapastamadre-logo.svg';

const Loader = () => {
  return (
    <div id="loader" className="loader">
      <img className="loader-img" src={pastaMadre} alt=""/>
    </div>
  );
}

export default Loader;