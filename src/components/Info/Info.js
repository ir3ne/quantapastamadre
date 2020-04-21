import React from 'react';
import close from '../../assets/close.svg';

const Info = () => {
  const closeInfo = () => {
    const info = document.getElementById('info');
    info.style.display = 'none';
  }

  return (
    <div id="info" className="info">
      <span id="close-info" onClick={closeInfo}><img src={close} alt=""/></span>
      Inserisci i grammi di farina che vuoi usare e verranno calcolate le giuste quantità degli altri ingredienti per fare un pane eccellente.
    </div>
  );
}

export default Info;