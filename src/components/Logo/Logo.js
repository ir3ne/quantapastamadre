import React from 'react';
import classNames from './Logo.module.scss'; 
import pastaMadreLogo from '../../assets/images/quantapastamadre-white-logo.svg';

const Logo = () => {
  return (
    <div className={classNames.logo}>
      <img className={classNames.logo__image} src={pastaMadreLogo} alt="pasta madre logo"/>
    </div>
  );
}

export default Logo;