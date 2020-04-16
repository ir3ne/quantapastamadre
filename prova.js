import React from 'react';

const methodName = () => {
  if (true) {
    return null;
  }

  if (false) {
    return (
      <div>
        <span>ciao</span>
      </div>
    );
  }

  return (
    <div>
      Fuori da tutti gli if
    </div>
  );
}

methodName();