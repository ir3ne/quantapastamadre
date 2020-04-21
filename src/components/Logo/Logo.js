import React from 'react';
import pastaMadre from '../../assets/pasta-madre-logo.svg';

const Logo = () => {
  return (
    <div className="mother-container">
      <img className="mother" src={pastaMadre} alt="pasta madre logo"/>
    </div>
  );
}

export default Logo;