import React from 'react';
import './App.css';
import './scss/all.scss'
import pastaMadre from './pasta-madre-logo.svg';
import recipe from './recipe.svg';
import fornoBrisa from './forno-brisa-logo.png';
import reset from './reset.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      twoFlours: 0,
      madre: 0,
      water: 0,
      salt: 0
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
          <div className="top">
            <div className="top-left">
              <img src={recipe} alt="recipe"/>
            </div>
            <div className="top-right">
              <span>Thanks to</span><img src={fornoBrisa} alt="forno brisa logo"/>
            </div>
          </div>
          <div className="app-container">
            <header class="header">
              <div className="mother-container">
                <img className="mother" src={pastaMadre} alt="pasta madre logo"/>
              </div>
              <h1>
                <span class="title-container">
                  <span class="title">quantapastamadre?</span>
                </span>
              </h1>
              
            </header>
            <main>
              <p class="instruction">Inserisci i grammi di farina <span role="img" aria-label="down pointing">👇</span></p>
              <div>
                <div class="flex-v-center">
                  <input 
                  type="number"
                  id="flour"
                  />
                  <span class="quantity">g</span>
                </div>
              </div>
              <div className="action">
                <button onClick={this.getFlourQuantity} class="calc">Calcola</button>
                <button class="reset"><img src={reset} alt=""/></button>
              </div>
            </main>
           
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
      </div>
    );
  }
}

export default App;
