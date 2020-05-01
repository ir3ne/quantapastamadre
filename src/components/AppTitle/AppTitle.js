import React from 'react';
import classNames from './AppTitle.module.scss';

const AppTitle = () => {
  return (
    <h1 className={classNames.appTitle}>
      <span className={classNames.appTitle__bg}>
        <span className={classNames['appTitle__bg-text']}>quantapastamadre?</span>
      </span>
    </h1>
  );
}

export default AppTitle;