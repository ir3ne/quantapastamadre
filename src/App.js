import React from 'react';
import './scss/all.scss';
import { FLOUR_BASE, MADRE_BASE, WATER_BASE, SALT_BASE } from './common/constants.js';
import { closeInfo } from './common/common.js';
import BgShape from './components/BgShape/BgShape';
import UserAction from './components/UserAction/UserAction';
import Loader from './components/Loader/Loader.js';
import Ingredients from './components/Ingredients/Ingredients';
import AppTitle from './components/AppTitle/AppTitle.js';
import Info from './components/Info/Info.js';
import Logo from './components/Logo/Logo.js';
import CalcButton from './components/CalcButton/CalcButton';

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
      getIngredients: false,
      visible: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getResult = this.getResult.bind(this);
    this.actions = this.actions.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  actions(num) {
    this.setState(this.getFlourQuantity(num));
  }

  getFlourQuantity(flourQuantity) {
    // Bread app Engine
    this.setState(() => {
      return {
        quantity: flourQuantity,
        twoFlours: flourQuantity / 2,
        madre: (MADRE_BASE * flourQuantity) / FLOUR_BASE,
        water: (WATER_BASE * flourQuantity) / FLOUR_BASE,
        salt: (SALT_BASE * flourQuantity) / FLOUR_BASE,
      };
    });
  }

  showInfo() {
    const info = document.getElementById('info');
    setTimeout(() => {
      info.style.transform = 'translateY(0)';
    }, 2000);
  }

  getResult() {
    closeInfo();
    const appContainer = document.querySelector('.app-container');
    appContainer.style.transform = 'translateY(-122px)';
    const flourValue = document.getElementById('flour').value;
    this.setState({
      loader: true,
    });
    setTimeout(() => {
      this.getFlourQuantity(flourValue);
      this.setState({
        loader: false,
        getIngredients: true,
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
            <header>
              <Logo />
              <AppTitle />
            </header>
            <main>
              <UserAction actions={this.actions} />
              <CalcButton getResult={this.getResult} quantity={this.state.quantity} />
            </main>
            <Info />
            {/* can I merge those two condition in one with && ? */}
            {this.state.loader ? <Loader /> : null}
            {this.state.getIngredients ? (
              <Ingredients
                quantity={this.state.quantity}
                twoFlours={this.state.twoFlours}
                madre={this.state.madre}
                water={this.state.water}
                salt={this.state.salt}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
