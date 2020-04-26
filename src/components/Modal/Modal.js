import React from 'react';

const Popup = (props) => {
  return (
    <div className={`popup ${props.showPopup ? 'showPopup' : 'null'}`}>
      This is the text of the popup.
    </div>
  );
}

export default Popup;