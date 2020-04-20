import React from 'react';
import './App.css';
import './scss/all.scss'
import pastaMadre from './assets/pasta-madre-logo.svg';
import recipe from './recipe.svg';
import fornoBrisa from './forno-brisa-logo.png';
// import closeIcon from './close-icon.js'
// import reset from './reset.svg';
import close from './close.svg';
import Loader from './components/Loader/Loader.js';
import Ingredients from './components/Ingredients/Ingredients';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      twoFlours: 0,
      madre: 0,
      water: 0,
      salt: 0,
      loader: false,
      getIngredients: false
    }

    this.getFlourQuantity = this.getFlourQuantity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showCalc = this.showCalc.bind(this);
  }

  actions(num) {
    if (num > 0) {
      return (
       <button className="calc" onClick={this.showCalc}>Calcola</button>
      );
    } else {
      return (
       <button className="calc" disabled>Calcola</button>
      );
    }
  }

  showInfo() {
    const info = document.getElementById('info');
    setTimeout(() => {
      info.style.transform = "translateY(0)";
    }, 2000);
  }

  closeInfo() {
    const info = document.getElementById('info');
    info.style.display = 'none';
  }

  showCalc() {
    const appContainer = document.querySelector(".app-container");
    appContainer.style.transform = "translateY(-122px)";
    this.closeInfo();
    this.setState({
      loader: true
    });
    setTimeout(() => {
      this.setState({
        loader: false,
        getIngredients: true
      });
    }, 2000);
  }

  getFlourQuantity() {
    const flour = document.getElementById("flour").value;
    this.setState(() => {
      return {
        quantity: flour,
        twoFlours: flour / 2,
        madre: 150 * flour / 500,
        water: 180 * flour / 500,
        salt: 20 * flour / 500
      }
    });
  }

  handleChange(event) {
    this.setState({quantity: event.target.value});
    this.actions();
  }

  componentDidMount() {
    this.showInfo();
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
            <header className="header">
              <div className="mother-container">
                <img className="mother" src={pastaMadre} alt="pasta madre logo"/>
              </div>
              <h1>
                <span className="title-container">
                  <span className="title">quantapastamadre?</span>
                </span>
              </h1>
              
            </header>
            <main>
              <p className="instruction">Inserisci i grammi di farina <span role="img" aria-label="down pointing">👇</span></p>
              <div>
                <div className="flex-v-center">
                  <div className="quantity-container">
                    <input 
                    type="number"
                    id="flour"
                    onChange={this.handleChange}
                    />
                    <div className="quantity">g</div>
                  </div>
                </div>
              </div>
              <div className="action">
              {this.actions(this.state.quantity)}
              </div>
              <div id="info" className="info">
              <span id="close-info" onClick={this.closeInfo}>{<img src={close} alt=""/>}</span>
              Inserisci i grammi di farina che vuoi usare e verranno calcolate le giuste quantità degli altri ingredienti per fare un pane eccellente.
              </div>
            </main>
            {this.state.loader ? <Loader/> : null}
            {this.state.getIngredients ?
            <Ingredients 
              quantity={this.state.quantity} 
              twoFlours={this.state.twoFlours} 
              madre={this.state.madre} 
              water={this.state.water} 
              salt={this.state.salt} 
            /> 
            : null
             }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
