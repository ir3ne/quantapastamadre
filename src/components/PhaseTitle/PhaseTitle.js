import React from 'react';
import classNames from './PhaseTitle.module.scss';

const PhaseTitle = (props) => {
  const { children } = props;

  return <h3 className={classNames.phaseTitle}>{children}</h3>;
};

export default PhaseTitle;
