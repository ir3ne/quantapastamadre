import React from 'react';
import classNames from './Steps.module.scss';
import { Modal } from 'antd';

class Steps extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div className={classNames.steps}>
        <h2 className={classNames.stepsTitle}>Ti serve aiuto con i passaggi?</h2>
        <button className={classNames.stepsBtn} onClick={this.showModal}>Clicca qui</button>
        <Modal
          visible={visible}
          title="Segui i passaggi!"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  };
}

export default Steps;