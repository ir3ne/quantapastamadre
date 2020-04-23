import React from 'react';

class Ingredients extends React.Component {

  
  render() {
   return (
    <div className="madre-ingredients">
      <h2 className="madre-ingredients--title">Prima fase: Autolisi</h2>
      <p>Farina: <span className="madre-ingredients__highlight"><span>{this.props.quantity} g</span></span> oppure {this.props.twoFlours} g di un tipo di farina + {this.props.twoFlours} g di un tipo di farina</p>
      <p>Pasta madre: <span className="madre-ingredients__highlight"><span>{this.props.madre} g</span></span></p>
      <p>Acqua: <span className="madre-ingredients__highlight"><span>{this.props.water} g</span></span></p>
      <h2 className="madre-ingredients--title">Seconda fase: Impasto</h2>
      <p>Sale: <span className="madre-ingredients__highlight"><span>{this.props.salt} g</span></span></p>
      <p>Acqua: <span className="madre-ingredients__highlight"><span>acqua rimanente</span></span></p>
    </div>
   );
  };
}

export default Ingredients;