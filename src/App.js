import React from 'react';
import './App.css';
import pastaMadre from './pasta-madre-logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      twoFlours: 0,
      madre: 0,
      water: 0
    }

    this.getFlourQuantity = this.getFlourQuantity.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    const containerAlert = document.getElementById("showAlert");
    containerAlert.style.display = "block";
    setInterval(() => {
      containerAlert.style.display = "none";  
    }, 3000);
  }
  getFlourQuantity() {
    const flour = document.getElementById("flour").value;
    const containerIngredients = document.getElementById("showIngredientsQuantity");
    if (flour <= 0) {
      this.showAlert();
    } else {
      this.setState(() => {
        return {
          quantity: flour,
          twoFlours: flour / 2,
          madre: 150 * flour / 500,
          water: 180 * flour / 500
        }
      });
      containerIngredients.style.display = "block";
    }
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="mother-container">
            <img className="mother" src={pastaMadre} alt=""/>
          </div>
          <p>Inserisci i grammi di farina</p>
          <div>
            <div>
              <span>
              <input 
              type="number"
              id="flour"
              />
              </span>
              <span> g</span>
            </div>
          </div>
          <p>puoi calcolare la quantità degli altri ingredienti cliccando qui sotto 
            <span role="img" aria-label="down pointing">👇</span>
          </p>
          <button onClick={this.getFlourQuantity}><span>Calcola</span></button>
          <a>Reset</a>
          <div id="showAlert" style={{display: "none"}}>
            <p>Inserisci la quantità di farina e poi clicca 'Calcola'</p>
          </div>
          <div id="showIngredientsQuantity" style={{display: "none"}}>
            <b>Prima fase</b>
            <p>Farina unica: {this.state.quantity} g</p>
              <i>oppure</i>
            <p>{this.state.twoFlours} g di un tipo di farina + {this.state.twoFlours} g di un tipo di farina</p>
            <p>Lievito madre: {this.state.madre} g</p>
            <p>Acqua: {this.state.water} g</p>
            <b>Seconda fase</b>
            <p>Sale: ---</p>
            <p>Acqua: qui acqua rimanente</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
