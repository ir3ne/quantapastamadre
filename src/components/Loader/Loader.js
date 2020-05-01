import React from 'react';
import pastaMadre from '../../assets/images/quantapastamadre-logo.svg';
import classNames from './Loader.module.scss';

const Loader = (props) => {
  const { showLoader } = props;

  return showLoader ? (
    <div id="loader" className={classNames.loader}>
      <img className={classNames.loader_img} src={pastaMadre} alt="" />
    </div>
  ) : null;
};

export default Loader;
