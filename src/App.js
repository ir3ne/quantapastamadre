import React from 'react';
import './App.css';
import './scss/all.scss';
import {
  FLOUR_BASE,
  MADRE_BASE,
  WATER_BASE,
  SALT_BASE
} from './common/constants.js';
import { Modal } from 'antd';
import { closeInfo } from './common/common.js';
import Loader from './components/Loader/Loader.js';
import Ingredients from './components/Ingredients/Ingredients';
import TopBar from './components/TopBar/TopBar.js';
import AppTitle from './components/AppTitle/AppTitle.js';
import Info from './components/Info/Info.js';
import Logo from './components/Logo/Logo.js';

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
      popup: false,
      visible: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.getResult = this.getResult.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
  togglePopup() {
    this.setState(
      {
        popup: !this.state.popup
      }
    );
  }

  actions(num) {
    if (num > 0) {
      return (
       <button className="calc" onClick={this.getResult}>Calcola</button>
      );
    } else {
      return (
       <button className="calc" disabled>Calcola</button>
      );
    }
  }

  getFlourQuantity(flourQuantity) {
    this.setState(() => {
      return {
        quantity: flourQuantity,
        twoFlours: flourQuantity / 2,
        madre: MADRE_BASE * flourQuantity / FLOUR_BASE,
        water: WATER_BASE * flourQuantity / FLOUR_BASE,
        salt: SALT_BASE * flourQuantity / FLOUR_BASE
      }
    });
  }

  showInfo() {
    const info = document.getElementById('info');
    setTimeout(() => {
      info.style.transform = "translateY(0)";
    }, 2000);
  }

  getResult() {
    closeInfo();
    const appContainer = document.querySelector(".app-container");
    appContainer.style.transform = "translateY(-122px)";
    const flourValue = document.getElementById("flour").value;
    this.setState({
      loader: true
    });
    setTimeout(() => {
      this.getFlourQuantity(flourValue);
      this.setState({
        loader: false,
        getIngredients: true
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
        <div className="app">
          <TopBar toggle={this.showModal} />
          <Modal
            className="recipe-info"
            title="Come faccio?"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <div className="app-container">
            <header className="header">
              <Logo />
              <AppTitle />
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
              <Info />
            </main>

            {/* can I merge those two condition in one with && ? */}
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
