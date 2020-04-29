import React from 'react';
import recipe from '../../assets/recipe.svg';
import fornoBrisa from '../../assets/forno-brisa-logo.png';

const TopBar = (props) => {
  return (
    <div className="top">
      <div className="top-left">
        {console.log(props)}
        <img onClick={props.toggle} src={recipe} alt="recipe"/>
      </div>
      <div className="top-right">
        <span>Thanks to</span><img src={fornoBrisa} alt="forno brisa logo"/>
      </div>
    </div>
  );
}

export default TopBar;

// this was in app.js
// import { Modal } from 'antd';

{/* <TopBar toggle={this.showModal} />
<Modal
  className="recipe-info"
  title="Come faccio?"
  visible={this.state.visible}
  onOk={this.handleOk}
  onCancel={this.handleCancel}
  footer={null}
>
  <p>Some contents...</p>
</Modal> */}