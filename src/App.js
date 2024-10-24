import React from 'react';
import './scss/all.scss';
import { FLOUR_BASE, MADRE_BASE, WATER_BASE_FIRST_STEP, WATER_BASE_SECOND_STEP, SALT_BASE } from './common/constants.js';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

import { closeInfo } from './common/common.js';
import BgShape from './components/BgShape/BgShape';

import Loader from './components/Loader/Loader.js';
import Ingredients from './components/Ingredients/Ingredients';

import Info from './components/Info/Info.js';
import Steps from './components/Steps/Steps';

import Thanks from './components/Thanks/Thanks';
import Credits from './components/Credits/Credits';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      showIngredients: false,
      visible: false,

      ingredients: {
        flour: 0,
        twoFlours: 0,
        madre: 0,
        water: 0,
        salt: 0,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.loadIngredients = this.loadIngredients.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  calcIngredientAmounts(flourQuantity) {
    // Bread app Engine
    return {
      flour: flourQuantity,
      twoFlours: flourQuantity / 2,
      madre: (MADRE_BASE * flourQuantity) / FLOUR_BASE,
      waterFirstStep: (WATER_BASE_FIRST_STEP * flourQuantity) / FLOUR_BASE,
      salt: (SALT_BASE * flourQuantity) / FLOUR_BASE,
      waterSecondStep: (WATER_BASE_SECOND_STEP * flourQuantity) / FLOUR_BASE
    };
  }

  setIngredients(flourQuantity) {
	this.setState({
        showIngredients: false,
      });
    // this function returns the ingredients quantity for the amount of flour
    this.setState({
      ingredients: this.calcIngredientAmounts(flourQuantity),
    });
  }

  showInfo() {
    const info = document.getElementById('info');
    setTimeout(() => {
      info.style.transform = 'translateY(0)';
    }, 2000);
  }

  clearInput() {
    const flourInput = document.getElementById("flour");
    flourInput.value = undefined;
    this.setState({
      ingredients: {
        flour: undefined
      }
    });
  }

  loadIngredients() {
    closeInfo();

    this.setState({
      showLoader: true,
      showIngredients: false
    });

    setTimeout(() => {
      this.setState({
        showLoader: false,
        showIngredients: true,
      });
    }, 2000);
  }

  handleChange(event) {
    this.setState(this.getFlourQuantity(event.target.value));
    this.actions();
  }

  componentDidMount() {
    this.showInfo();
  }

  render() {
    return (
      <div>
        <BgShape />
        <div className="app">
          <div className="app-container">
            <Header />
            <Main
              flourQty={this.state.ingredients.flour}
              onFlourQtyChange={this.setIngredients}
              clearInput={this.clearInput}
              loadIngredients={this.loadIngredients}
            />
            <Info />
            <Loader showLoader={this.state.showLoader} />
            <Ingredients
              ingredients={this.state.ingredients}
              showIngredients={this.state.showIngredients}
            />
            <Steps />
            <Thanks />
            <Credits />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
