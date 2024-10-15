import React from 'react';
import classNames from './Info.module.scss';
// import close from '../../assets/close.svg';
// import { closeInfo } from '../../common/common.js';

const Info = () => {
  return (
    <div id="info" className={classNames.info}>
      {/* <span id="close-info" class={classNames.info__closeBtn} onClick={closeInfo}>
        <img src={close} alt="" />
      </span> */}
      Inserisci i grammi di farina che vuoi usare e verranno calcolate
      le giuste quantità degli altri ingredienti per fare un pane eccellente!
    </div>
  );
};

export default Info;
