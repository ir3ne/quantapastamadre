import React from 'react';
import pastaMadre from '../../assets/pasta-madre-logo.svg';

const Loader = () => {
  return (
    <div id="loader" className="loader">
      <img className="loader-img" src={pastaMadre} alt=""/>
    </div>
  );
}

export default Loader;