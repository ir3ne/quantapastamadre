import React from 'react';
import classNames from './PhaseTag.module.scss';

const PhaseTag = (props) => {
  const { children } = props;
  return <span className={classNames.phaseTag}>{children}</span>;
};

export default PhaseTag;
