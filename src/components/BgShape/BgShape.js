import React from 'react';
import classNames from './BgShape.module.scss';

const BgShape = () => {
  return (
    <div className={classNames.bgShape}>
      <section className={classNames.bgShape__curved0}></section>
      <section className={classNames.bgShape__curved1}></section>
    </div>
  );
}

export default BgShape;