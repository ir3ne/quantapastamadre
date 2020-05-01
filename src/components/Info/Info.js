import React from 'react';
import close from '../../assets/close.svg';
import { closeInfo } from '../../common/common.js';
const Info = () => {
  return (
    <div id="info" className="info">
      <span id="close-info" onClick={closeInfo}>
        <img src={close} alt="" />
      </span>
      Enter the grams of flour you want to use and the right quantities of the other ingredients
      will be calculated to make an excellent bread.
    </div>
  );
};

export default Info;
