import React from 'react';
import classNames from './Credits.module.scss';
import CreditsIcon from '../../assets/images/credits-icon.png';

const Credits = () => {
  return (
    <div className={classNames.credits}>
      <div className={classNames.creditsText}>
        Developed with <span><img width="30px" src={CreditsIcon} alt="credits" /></span> by 
        <a href="https://irenetomaini.com/">
        Irene
        </a>
         and 
        <a href="https://www.shehan.cloud/">
        Shehan
        </a>
      </div>
      
    </div>
  );
}

export default Credits;