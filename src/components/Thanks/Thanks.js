import React from 'react';
import classNames from './Thanks.module.scss';
import FornoBrisaLogo from '../../assets/images/forno-brisa-logo.png'

const Thanks = () => {
  return (
    <div className={classNames.thanks}>
      <div className={classNames.thanksText}>
        Thanks to
      </div>
      <a href="https://www.facebook.com/fornobrisa" rel="noopener noreferrer" target="_blank">
        <img src={FornoBrisaLogo} alt="Forno Brisa Logo"/>
      </a>
    </div>
  );
}

export default Thanks;