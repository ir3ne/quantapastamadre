import React from 'react';
import classNames from './Steps.module.scss';
import PhaseTag from '../PhaseTag/PhaseTag';
import PhaseTitle from '../PhaseTitle/PhaseTitle';
import { Modal } from 'antd';
import imgAutolisi from '../../assets/images/stepsModal/modal-autolisi.png'
import imgImpasto from '../../assets/images/stepsModal/modal-impasto.png'
import imgPagnotta from '../../assets/images/stepsModal/modal-pagnotta.png'
import imgTaglio from '../../assets/images/stepsModal/modal-taglio.png'
import imgPaneFinito from '../../assets/images/stepsModal/modal-pane-finito.png'

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
    const { visible } = this.state;
    return (
      <div className={classNames.steps}>
        <h2 className={classNames.stepsTitle}>Ti serve aiuto con i passaggi?</h2>
        <button className={classNames.stepsBtn} onClick={this.showModal}>Clicca qui</button>
        <Modal
          className={classNames.stepsModal}
          visible={visible}
          style={{ top: 30 }}
          width="600px"
          title="Segui i passaggi di Forno Brisa per fare il tuo PANE!"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <PhaseTag>Prima fase</PhaseTag>
          <PhaseTitle>Autolisi</PhaseTitle>
          <ul>
            <li>In una ciotola versa tutte le farine, tutto il lievito madre e l'acqua a 30°</li>
            <li>Mescola grossolanamente per 1 minuto.
              Benvenuto nell'autolisi: lascia la farina e l'acqua stringere 
              un fantastico legame e poi riposare per 30 meritati minuti.
            </li>
          </ul>
          <img src={imgAutolisi} alt="autolisi" width="100%" />
          <PhaseTag>Seconda fase</PhaseTag>
          <PhaseTitle>Impasto</PhaseTitle>
          <ul>
            <li>Nella ciotola aggiungi tutto il sale e la rimanente acqua,
              impasta schiacciando con le nocche l'impasto finché non sarà omogeneo e morbido.
            </li>
            <li>Prendi l'altra ciotola, ungila con un filo d'olio, rovesciaci dentro l'impasto,
              coprilo con la pellicola e mettilo a lievitare per 2 ore nel forno spento,
              con sportello chiuso e metti anche nel forno una ciotola con l'acqua calda, 
              per creare una cella di lievitazione casalinga.
            </li>
          </ul>
          <img src={imgImpasto} alt="impasto" width="100%" />
          <ul>
            <li>Lava la prima ciotola
            </li>
            <li>Adesso devi formare il pane così:
            </li>
          </ul>
          <img src={imgPagnotta} alt="pagnotta" width="100%" />
          <ul>
            <li>Prendi una ciotola pulita, mettici un canovaccio e 
              infarinalo bene
            </li>
            <li>Capovolgi la pagnotta nella ciotola, coprila con il canovaccio
              e metti in frigorifero la ciotola
            </li>
          </ul>
          <h3>Domani mattina:</h3>
          <ul>
            <li>Prendi una ciotola pulita, mettici un canovaccio e 
              infarinalo bene
            </li>
            <li>Accendi il forno statico a 240° e fai colazione con calma
            </li>
            <li>Quando il forno è a temperatura, prendi una teglia,
              stendi la carta forno sopra, scopri la pagnotta e rovesciala
              delicatamente sulla teglia
            </li>
            <li>Fai un taglio a piacere sulla pagnotta con un coltello ben affilato
            </li>
          </ul>
          <img src={imgTaglio} alt="pagnotta taglio" width="100%" />
          <ul>
            <li>Umidifica leggermente con dell'acqua la superficie della pagnotta,
              usando uno spruzzino o un pennello o accarezzandola con la mano bagnata
            </li>
            <li>Accendi il forno statico a 240° e fai colazione con calma
            </li>
            <li>Quando il forno è a temperatura, prendi una teglia,
              stendi la carta forno sopra, scopri la pagnotta e rovesciala
              delicatamente sulla teglia
            </li>
            <li>Fai un taglio a piacere sulla pagnotta con un coltello ben affilato
            </li>
            <li>Metti la teglia nel forno più in basso possibile per 30 minuti a 230°
            </li>
            <li>Dopo apri lo sportello e imposta la tempretatura a 180° per altri 15 
              minuti, così si forma meglio la crosta e fai bella figura coi vicini
            </li>
          </ul>
          <h3>Ci siamo!</h3>
          <img src={imgPaneFinito} alt="pane completato" width="100%" />
          <h2>Il pane è completato!!</h2>
        </Modal>
      </div>
    )
  };
}

export default Steps;